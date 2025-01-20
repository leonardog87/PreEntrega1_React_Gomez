import './ProductDetailContainer.scss';
import ProductDetail from '../productDetail copy/ProductDetail';
import UseFecth from '../../hooks/UseFetch';

const ProductDetailContainer = () => {
    const { data } = UseFecth('./src/json/products.json')

    const getProductById = (id) => {
        return data.find(product => product.id === id);
    }

    const selectedProduct = getProductById(1);
    

    return (
        <>
        <main>
            {selectedProduct ? (
                <ProductDetail 
                    id={selectedProduct.id}
                    title={selectedProduct.title}
                    description={selectedProduct.description}
                    price={selectedProduct.price}
                    url={selectedProduct.url}
                />
            ) : (
                <p>Product not found</p>
            )}
        </main>        
        </>
    )
}

export default ProductDetailContainer;