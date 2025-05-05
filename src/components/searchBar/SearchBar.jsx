import './SearchBar.scss'
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';

const SearchBar = () => {
    const { searchTerm, predictions, showPredictions, handleSearch, inputRef, predictionResultRef, handleKeyDown, handleClick } = useSearch()

    return (
        <div>
            <form className='search-bar'>
                <input
                    type="text"
                    ref={inputRef}
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe algo..."
                />
                <Link to='SearchResultContainer'><img src="../src/assets/icons/icon_search.png" alt="img-list1" /></Link>
            </form>

            {showPredictions && predictions.length > 0 && (
                <ul
                    id="predictionResult"
                    ref={predictionResultRef}
                    style={{ position: 'absolute', textDecoration: 'none' }}
                >
                    {predictions?.map(prediction =>
                        <Link style={{ textDecoration: 'none' }} key={prediction.id} to='SearchResultContainer' onClick={handleClick}>
                            <li id="predictionResult" className='prediction-result'>{`${prediction.title} - ${prediction.description}`}</li>
                        </Link>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;