import './SearchBar.scss'
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [predictions, setPredictions] = useState([]);
    const { data } = useFetch('', 50);
    const inputRef = useRef(null);
    const predictionResultRef = useRef(null);
    const [showPredictions, setShowPredictions] = useState(true);

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

        setPredictions(uniqueMatches);
        console.log("Matches únicos por título:", uniqueMatches);
    };

    return (
        <div>
            <form className='search-bar'>
                <input
                    type="text"
                    ref={inputRef}
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Escribe algo..."
                />
                <a href="#!"><img src="../src/assets/icons/icon_search.png" alt="img-list1" /></a>
            </form>

            {showPredictions && predictions.length > 0 && (
                <ul
                    id="predictionResult"
                    ref={predictionResultRef}
                    style={{ position: 'absolute', textDecoration: 'none' }}
                >
                    {predictions?.map((prediction) => (
                        <Link style={{ textDecoration: 'none' }} key={prediction.id}>
                            <li id="predictionResult" className='prediction-result'>{`${prediction.title} - ${prediction.description}`}</li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;