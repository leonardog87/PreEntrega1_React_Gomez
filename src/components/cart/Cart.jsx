import './Cart.scss'
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import ProductCard from '../productCard/ProductCard';
import ButtonsCartProductCard from '../ButtonsCartProductCard/ButtonsCartProductCard'
import IconClose from '../iconClose/IconClose'
import { useCart } from '../../hooks/useCart';
import QuantityProducts from '../quantityProducts/QuantityProducts';
import IconGarbage from '../iconGarbage/IconGarbage';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, addToCart, lessToCart, removeToCart, sumTotalPrice, hideCart } = useCart()

    const endBuy = () => {
        cart.length > 0 ?
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Te enviaremos tus productos cuando esten listos! ",
                text: "Gracias por tu compra!",
                user: "success",
                showConfirmButton: false,
                timer: 2700
            }) :
            Swal.fire("No tienes productos en tu carrito!");
    }

    return (
        <>
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
                    {cart?.map((product) => (
                        <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                            <ButtonsCartProductCard >
                                <IconGarbage event={() => removeToCart(product)} />
                                <QuantityProducts quantity={product.quantity} eventAdd={() => addToCart(product)} eventLess={() => lessToCart(product)} />
                            </ButtonsCartProductCard>
                        </ProductCard>)
                    )}
                </div>
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h3>Total</h3>
                        <h3 id="totalCart">$ {sumTotalPrice()}</h3>
                    </div>
                    <div className="product-detail-description-talles_buyit_button-2">
                        <Link className="button-pay" to={"/CartFinal/"}>Carrito</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart