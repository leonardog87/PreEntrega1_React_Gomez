import { createContext, useEffect } from "react";

export const FilterContext = createContext()

export function FilterProvider({ children }) {    

    const showFilter = () => {
        filterContainer.style.display = 'block';
      }

    const hideFilter = () => {
        filterContainer.style.display = 'none';
    }

    useEffect(() => {
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
            hideFilter
        }}
        >
            {children}
        </FilterContext.Provider>
    )
}