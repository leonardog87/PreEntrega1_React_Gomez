import './CarouselProducts.scss'
import ProductCard from '../productCard/ProductCard';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import UseFecth from '../../hooks/UseFetch';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartProvider } from '../../context/cart'; //ver si se puede achicar el scope

const CarouselProducts = () => {

    const { data } = UseFecth('./src/json/products.json')
    const { addToCart } = useCart()

    return (
        <>
            <div className="index-carousel-container">
                <button className="pre-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="pre-btn-img" /></button>
                <button className="nxt-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="next-btn-img" /></button>
                <div className="index-carousel" id="indexCarousel">
                    {data?.map((product) => (
                        <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price} quantity={product.quantity}>
                            <ButtonAddToCart text="Agregar al Carrito" id="AgregarCarrito" event={() => addToCart(product)} />
                        </ProductCard>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarouselProducts

