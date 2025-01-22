import './SearchBar.scss'

const SearchBar = () => {

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search" id="searchBar" />
                <a href="#!"><img src="../src/assets/icons/icon_search.png" alt="img-list1" /></a>
            </div>
        </>
    )
}

export default SearchBar