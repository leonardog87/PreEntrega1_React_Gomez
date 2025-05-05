import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const FilterContext = createContext()

export function FilterProvider({ children }) {
    const [filter, setFilter] = useState([])
    // const { data } = useFetch();
    const { data, loading, error } = useFetch('../src/json/products.json', 250)

    useEffect(() => {
        setFilter([...data]);
    }, [data]);

    const showFilter = () => {
        filterContainer.style.display = 'block';
    }

    const hideFilter = () => {
        filterContainer.style.display = 'none';
    }

    const selectEffect = () => {
        const toLow = document.getElementById('toLow');
        const toHigh = document.getElementById('toHigh');
        const newThings = document.getElementById('newThings');
        const moreSellers = document.getElementById('moreSellers');

        const elements = [toLow, toHigh, newThings, moreSellers];

        elements.forEach(element => {
            element.addEventListener('click', () => {
                if (element.style.borderLeft === 'none') {
                    element.style.borderLeft = '5px solid #000';
                }
                else {
                    elements.forEach(el => el.style.borderLeft = 'none');
                    element.style.borderLeft = '5px solid #000';
                }
            });
        });
    }

    const deleteFilterOrder = () => {
        const toLow = document.getElementById('toLow');
        const toHigh = document.getElementById('toHigh');
        const newThings = document.getElementById('newThings');
        const moreSellers = document.getElementById('moreSellers');

        const elements = [toLow, toHigh, newThings, moreSellers];

        elements.forEach(element => {
            element.style.borderLeft = 'none';
        });
        setFilter([...data]);
    }

    useEffect(() => {
        selectEffect();

        const handleClickOutside = (event) => {
            if (filterContainer && !filterContainer.contains(event.target)) {
                hideFilter();
            }
        };

        const closeFilter = document.addEventListener('mousedown', handleClickOutside);
        return () => {
            closeFilter;
        };
    }, []);

    const priceToLow = () => {
        const products = filter.sort((a, b) => a.price - b.price);
        setFilter([...products]);
    }

    const priceToHigh = () => {
        const products = data.sort((a, b) => b.price - a.price);
        setFilter([...products]);
    }

    const filterForWomen = () => {
        const products = data.filter(product => product.category === 'women');
        setFilter([...products]);
    }

    const filterForMen = () => {
        const products = data.filter(product => product.category === 'men');
        setFilter([...products]);
    }

    return (
        <FilterContext.Provider value={{
            showFilter,
            hideFilter,
            selectEffect,
            deleteFilterOrder,
            filter,
            priceToLow,
            priceToHigh
        }}
        >
            {children}
        </FilterContext.Provider>
    )
}