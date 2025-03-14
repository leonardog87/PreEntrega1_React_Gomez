// import './SearchBar.scss'
// import React, { useState } from 'react';
// import { useSearch } from '../../hooks/useSearch';

// const SearchBar = () => {
//     const { searchTerm, setSearchTerm, handleSearch } = useSearch();
//     const [inputValue, setInputValue] = useState(searchTerm);   

//     return (
//         <>
//             <form onSubmit={handleSearch} className="search-bar">
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value, console.log(inputValue))}    
//                     placeholder="Buscar..."
//                 />
//                 <a href="#!"><img src="../src/assets/icons/icon_search.png" alt="img-list1" /></a>
//                 {/* <button type="submit">Buscar</button> */}
//             </form>
//         </>
//     );
// };

// export default SearchBar;

import React, { useContext, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';

const SearchBar = () => {
    const { searchTerm, handleSearch, predictions } = useSearch();

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch} // Actualizar el término de búsqueda
                    placeholder="Escribe algo..."
                />
            </form>

            {/* Mostrar las predicciones */}
            {predictions.length > 0 && (
                <ul style={{color: 'black'}}>
                    {predictions.map((prediction, index) => (
                        <li style={{color: 'black'}} key={index}>{prediction} {console.log(prediction)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;