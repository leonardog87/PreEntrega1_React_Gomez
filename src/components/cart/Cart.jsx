import './Cart.scss'
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import ProductCard from '../productCard/ProductCard';
import ButtonsCartProductCard from '../ButtonsCartProductCard/ButtonsCartProductCard'
import IconClose from '../iconClose/IconClose'
<<<<<<< HEAD
import { useCart } from '../../hooks/useCart';
import QuantityProducts from '../quantityProducts/QuantityProducts';
import IconGarbage from '../iconGarbage/IconGarbage';

const Cart = () => {
    const { cart, addToCart, lessToCart, removeToCart, sumTotalPrice, hideCart } = useCart()
=======
import UseFecth from '../../hooks/UseFetch';
import { cart } from '../carouselProducts/CarouselProducts';

const Cart = () => {


    const takeproduct = () => {
        alert(JSON.stringify(cart))
    }

    const { data } = UseFecth('./src/json/products.json')

    const hideCart = () => {
        cartContainer.style.display = 'none'
    }
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

    return (
        <div className="cart-container" id="cartContainer">
            <div className="cart-header">
                <div className="cart-title">
                    <p>MI COMPRA</p>
                </div>
                <div className="cart-close">
                    <IconClose event={hideCart} />
                </div>
            </div>
            <div id="webCart" className="cart-product">
<<<<<<< HEAD
                {cart?.map((product) => (
                    <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                        <ButtonsCartProductCard >
                            <IconGarbage event={() => removeToCart(product)} />
                            <QuantityProducts quantity={product.quantity} eventAdd={() => addToCart(product)} eventLess={() => lessToCart(product)} />
                        </ButtonsCartProductCard>
=======
                {data?.map((product) => (
                    <ProductCard id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                        <ButtonsCartProductCard />
                        
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
                    </ProductCard>)
                )}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h3>Total</h3>
<<<<<<< HEAD
                    <h3 id="totalCart">$ {sumTotalPrice()}</h3>
                </div>
                <div className="product-detail-description-talles_buyit_button-2">
                    <ButtonAddToCart text="Finalizar Compra" id="endBuyButton" event={function print() { console.log(cart) }} />
=======
                    <h3 id="totalCart">$ 0</h3>
                </div>
                <div className="product-detail-description-talles_buyit_button-2">
                    <ButtonAddToCart text="Finalizar Compra" id="endBuyButton" event={function print() {console.log(cart)}} />
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
                </div>
            </div>
        </div>
    )
}

export default Cart