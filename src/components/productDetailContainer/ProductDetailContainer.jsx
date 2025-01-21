import './ProductDetailContainer.scss';
import ProductDetail from '../productDetail/ProductDetail';
import { useEffect, useState } from 'react';
import UseFetch from '../../hooks/UseFetch';

const ProductDetailContainer = () => {

    const { data } = UseFetch('./src/json/products.json');

    return (
        <>
            <main>
                {data.map((product) => (
                    <ProductDetail key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price} />
                ))}
            </main>
        </>
    )
}

export default ProductDetailContainer;