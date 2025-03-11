import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [predictions, setPredictions] = useState([]);
    const { data } = useFetch('', 250);

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

        const firstMatch = data.find((item) => {
            return (
                (item.title &&
                    String(item.title).toLowerCase().includes(inputValue.toLowerCase())) ||
                (item.description &&
                    String(item.description).toLowerCase().includes(inputValue.toLowerCase()))
            );
        });

        console.log("First Match:", firstMatch);

        const predictionResult = firstMatch
            ? [`${firstMatch.title} - ${firstMatch.description}`]
            : [];

        console.log("Prediction Names:", predictionResult);

        setPredictions(predictionResult);
    };

    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                handleSearch,
                predictions,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};