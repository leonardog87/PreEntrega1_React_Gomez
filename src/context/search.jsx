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

        const firstMatch = data.filter((item) => {
            return (
                (item.title &&
                    String(item.title).toLowerCase().includes(inputValue.toLowerCase())) ||
                (item.description &&
                    String(item.description).toLowerCase().includes(inputValue.toLowerCase()))
            );
        });
        setPredictions(firstMatch)
        console.log("First Match:", firstMatch);
        console.log("Predictions:", predictions)
        
        //esta tomando a firstmatch como un objeto, por lo que no lo pushea a predictions
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