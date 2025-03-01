import './CartFinal.scss';
import { useCart } from '../../hooks/useCart';
import ProductCard from '../productCard/ProductCard';
import ButtonsCartProductCard from '../ButtonsCartProductCard/ButtonsCartProductCard';
import IconGarbage from '../iconGarbage/IconGarbage';
import QuantityProducts from '../quantityProducts/QuantityProducts';

const CartFinal = () => {

    const { cart, addToCart, lessToCart, removeToCart, sumTotalPrice, countItemsInCart } = useCart();
    if (cart.length === 0) {
        return (
            <div className="core-container">
                <div className="cart-final-container">
                    <div className="cart-final-container_core">
                        <div className="cart-final-container_core_text">
                            <div className="cart-final_title">
                                <h1>TU CARRITO ESTA VACIO!</h1>
                                <p>Cuando agregues un producto al carrito, lo vas a ver aca!</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-final-container_total" style={{ backgroundColor: 'transparent' }}>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="core-container">
            <div className="cart-final-container">
                <div className="cart-final-container_core">
                    <div className="cart-final-container_core_text">
                        <div className="cart-final_title">
                            <h1>TU CARRITO</h1>
                            <p>TOTAL ({countItemsInCart()} {countItemsInCart() > 1 ? 'productos' : 'producto'}) <span style={{ fontWeight: 'bold' }}> ${sumTotalPrice()}</span></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore voluptatibus perspiciatis, dolor doloribus quaerat mollitia reiciendis earum adipisci, debitis quasi</p>
                        </div>
                        <div className="cart-final_items">
                            {cart?.map((product) => (
                                <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                                    <ButtonsCartProductCard >
                                        <IconGarbage event={() => removeToCart(product)} />
                                        <QuantityProducts quantity={product.quantity} eventAdd={() => addToCart(product)} eventLess={() => lessToCart(product)} />
                                    </ButtonsCartProductCard>
                                </ProductCard>)
                            )}
                        </div>
                    </div>
                </div>
                <div className="cart-final-container_total">
                    <input type="button" value="Comprar / Pagar" className="button-pay" />
                    <div className="cart-final-container_total_subtotal">
                        <div className="cart-final-container_total_title">
                            <h2>Resumen de compra</h2>
                        </div>
                        <div className="resumen">
                            <span>{countItemsInCart()} {countItemsInCart() > 1 ? 'productos' : 'producto'}</span>
                            <span>Entrega Gratis</span>
                        </div>
                        <div className="subtotal">
                            <span>Total</span>
                            <span>{sumTotalPrice()}</span>
                        </div>
                        {/* <div className="opciones-pago">
                    <span>Opciones de pago</span>
                </div> */}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default CartFinal;