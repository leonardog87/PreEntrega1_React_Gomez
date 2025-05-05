import './SearchResultContainer.scss'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../productCard/ProductCard';
import { useSearch } from '../../hooks/useSearch';


const SearchResultContainer = () => {
    const { predictionsAll } = useSearch()

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                <h1>Search Results</h1>
                {predictionsAll?.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        url={product.url}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </>
    )

};

export default SearchResultContainer;