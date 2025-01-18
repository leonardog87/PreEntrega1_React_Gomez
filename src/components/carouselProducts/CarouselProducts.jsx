import './CarouselProducts.scss'
import ProductCard from '../productCard/ProductCard';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import UseFecth from '../../hooks/UseFetch';
<<<<<<< HEAD
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartProvider } from '../../context/cart'; //ver si se puede achicar el scope
=======
import { useState } from 'react'; 

export let cart = []
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

const CarouselProducts = () => {

    const { data } = UseFecth('./src/json/products.json')
<<<<<<< HEAD
    const { addToCart } = useCart()
=======
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

    return (
        <>
            <div className="index-carousel-container">
                <button className="pre-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="pre-btn-img" /></button>
                <button className="nxt-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="next-btn-img" /></button>
                <div className="index-carousel" id="indexCarousel">
                    {data?.map((product) => (
<<<<<<< HEAD
                        <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price} quantity={product.quantity}>
                            <ButtonAddToCart text="Agregar al Carrito" id="AgregarCarrito" event={() => addToCart(product)} />
=======
                        <ProductCard id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                            <ButtonAddToCart text="Agregar al Carrito" id="AgregarCarrito" event={function addToCart() {cart = [...cart, product], console.log((cart))}} />
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
                        </ProductCard>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarouselProducts

