import './ProductDetailContainer.scss';
import ProductDetail from '../productDetail/ProductDetail';
import { useEffect, useState } from 'react';
import UseFetch from '../../hooks/UseFetch';
import { useCart } from '../../hooks/useCart';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';

const ProductDetailContainer = () => {

    const { data } = UseFetch('../src/json/products.json');
    const { addToCart } = useCart();

    console.log(data)

    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (data && data.length > 0) {
                const productId = window.location.pathname.split('/').pop();
                const product = await new Promise((resolve) => {
                    const selected = data.find((item) => item.id === productId);
                    resolve(selected);
                });
                setSelectedProduct(product);
            }
        };

        fetchProduct();
    }, [data]);

    return (
        <>
            <div>
                {selectedProduct && (
                    <ProductDetail
                        key={selectedProduct.id}
                        id={selectedProduct.id}
                        url={selectedProduct.url}
                        title={selectedProduct.title}
                        description={selectedProduct.description}
                        price={selectedProduct.price}
                        event={() => addToCart(selectedProduct)}
                    />
                )}
            </div>
        </>
    )
}

export default ProductDetailContainer;