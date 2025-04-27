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

<<<<<<< HEAD
        const firstMatch = data.filter((item) => {
=======
        const firstMatch = data.find((item) => {
>>>>>>> 61b411e101e9449683250763b64a0b599869604f
            return (
                (item.title &&
                    String(item.title).toLowerCase().includes(inputValue.toLowerCase())) ||
                (item.description &&
                    String(item.description).toLowerCase().includes(inputValue.toLowerCase()))
            );
        });

        console.log("First Match:", firstMatch);

<<<<<<< HEAD
        // const predictionResult = firstMatch
        //     ? [`${firstMatch.title} - ${firstMatch.description}`]
        //     : [];

        const predictionResult = firstMatch
            ? firstMatch.map(match => `${match.title} - ${match.description}`) : [];
=======
        const predictionResult = firstMatch
            ? [`${firstMatch.title} - ${firstMatch.description}`]
            : [];
>>>>>>> 61b411e101e9449683250763b64a0b599869604f

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