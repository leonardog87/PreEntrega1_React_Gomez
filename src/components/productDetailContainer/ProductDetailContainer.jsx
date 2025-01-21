import './ProductDetailContainer.scss';
import ProductDetail from '../productDetail/ProductDetail';
import { useEffect, useState } from 'react';
import UseFetch from '../../hooks/UseFetch';

const ProductDetailContainer = () => {

    const { data } = UseFetch('http://localhost:5173/src/json/products.json');
    console.log(data)

    return (
        <>
            <main>
                {data?.map((product) => (
                    <ProductDetail key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price} />
                ))}
            </main>
        </>
    )
}

export default ProductDetailContainer;