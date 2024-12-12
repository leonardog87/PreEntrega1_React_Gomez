import './CarouselProducts.scss'
import ProductCard from '../productCard/ProductCard';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import UseFecth from '../../hooks/UseFetch';
import { useState } from 'react'; 

export let cart = []

const CarouselProducts = () => {

    const { data } = UseFecth('./src/json/products.json')

    return (
        <>
            <div className="index-carousel-container">
                <button className="pre-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="pre-btn-img" /></button>
                <button className="nxt-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="next-btn-img" /></button>
                <div className="index-carousel" id="indexCarousel">
                    {data?.map((product) => (
                        <ProductCard id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                            <ButtonAddToCart text="Agregar al Carrito" id="AgregarCarrito" event={function addToCart() {cart = [...cart, product], console.log((cart))}} />
                        </ProductCard>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarouselProducts

