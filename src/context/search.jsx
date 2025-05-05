import React, { createContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [predictions, setPredictions] = useState([]);
    const [predictionsAll, setPredictionsAll] = useState([])
    const { data, loading, error } = useFetch('../src/json/products.json', 250)
    const inputRef = useRef(null);
    const predictionResultRef = useRef(null);
    const [showPredictions, setShowPredictions] = useState(true);
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            navigate('/SearchResultContainer/', { state: { searchTerm } });
            setShowPredictions(false);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Link fue clickeado');
        navigate('/SearchResultContainer/', { state: { searchTerm } });
        setShowPredictions(false)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && predictionResultRef.current &&
                !inputRef.current.contains(event.target) &&
                !predictionResultRef.current.contains(event.target)) {
                setShowPredictions(false);
            }
        };

        const handleInputClick = () => {
            if (predictions.length > 0) {
                setShowPredictions(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        if (inputRef.current) {
            inputRef.current.addEventListener('click', handleInputClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (inputRef.current) {
                inputRef.current.removeEventListener('click', handleInputClick);
            }
        };
    }, [predictions]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        predictWord(e.target.value);
    };

    const predictWord = (inputValue) => {
        if (!inputValue || !data || data.length === 0) {
            setPredictions([]);
            return;
        }

        const matchControl = data.filter((item) => {
            return (
                (item.title && String(item.title).toLowerCase().includes(inputValue.toLowerCase())) ||
                (item.description && String(item.description).toLowerCase().includes(inputValue.toLowerCase()))
            );
        });

        const uniqueMatches = matchControl.reduce((acc, current) => {
            if (!acc.some(item => item.title === current.title)) {
                acc.push(current);
            }
            return acc;
        }, []);

        setPredictionsAll(matchControl)
        setPredictions(uniqueMatches);
        console.log("Matches únicos por título:", uniqueMatches);
    };


    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                handleSearch,
                predictions,
                showPredictions,
                inputRef,
                predictionResultRef,
                handleKeyDown,
                predictionsAll,
                handleClick
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};