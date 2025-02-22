import './ProductDetailContainer.scss';
import ProductDetail from '../productDetail/ProductDetail';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useCart } from '../../hooks/useCart';
import Loader from '../loader/loader';

const ProductDetailContainer = () => {

    const { data } = useFetch();
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

    if (selectedProduct)
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
        );
    else
        return <Loader />;
}

export default ProductDetailContainer;