import { createContext, useEffect } from "react";

export const FilterContext = createContext()

export function FilterProvider({ children }) {

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
            element.style.borderLeft = 'none';  });
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

    return (
        <FilterContext.Provider value={{
            showFilter,
            hideFilter,
            selectEffect,
            deleteFilterOrder
        }}
        >
            {children}
        </FilterContext.Provider>
    )
}