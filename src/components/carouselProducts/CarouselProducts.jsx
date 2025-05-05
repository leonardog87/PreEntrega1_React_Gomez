import './CarouselProducts.scss';
import ProductCard from '../productCard/ProductCard';
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import useFetch from '../../hooks/useFetch';
import { useCart } from '../../hooks/useCart';
import Loader from '../loader/loader';
import UnexpectedError from '../unexpectedError/UnexpectedError';

const CarouselProducts = () => {

    const { data, loading, error } = useFetch('../src/json/products.json', 250)
    // const { data, loading, error } = useFetch('', 250)
    const { addToCart } = useCart()

    if (loading) {
        return <Loader />;
    }

    if (error) {
        console.log('Error:', { error });
        return (
            <>
                <UnexpectedError />
            </>
        )
    }

    if (data.length > 0) {
        return (
            <>
                <div className="index-carousel-container">
                    <button className="pre-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="pre-btn-img" /></button>
                    <button className="nxt-btn"> <img src="src/assets/icons/arrow-left-32.png" alt="next-btn-img" /></button>
                    <div className="index-carousel" id="indexCarousel">
                        {data.map((product) => (
                            <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price} quantity={product.quantity}>
                                <ButtonAddToCart text="Agregar al Carrito" id="AgregarCarrito" event={() => addToCart(product)} />
                            </ProductCard>
                        ))}
                    </div>
                </div>
            </>
        );
    } else {
        return <Loader />;
    }
}

export default CarouselProducts

