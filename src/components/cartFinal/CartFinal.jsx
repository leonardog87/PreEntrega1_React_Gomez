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
                                <p style={{ marginTop: '2%'}}>Cuando agregues un producto al carrito, lo vas a ver aca!</p>
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
                <div className="cart-final-container_items">{/**cambiar */}
                    <div className="cart-final-container_items_text">{/**cambiar */}
                        <div className="cart-final-container_items_text_title">{/**cambiar */}
                            <h1>TU CARRITO</h1>                            
                            <div className="discount-promotion">
                                <h3>HASTA 6 CUOTAS SIN INTERÉS</h3>
                                <p>Pagá en 3 cuotas sin interés por compras desde $89.999 o en 6 cuotas sin interés desde $149.999</p>
                            </div>
                            <p><span style={{ fontWeight: '600' }}>TOTAL</span> ({countItemsInCart()} {countItemsInCart() > 1 ? 'productos' : 'producto'}) <span style={{ fontWeight: 'bold' }}> ${sumTotalPrice()}</span></p>
                        </div>
                        <div className="cart-final-container_items_products">{/**cambiar */}
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

                    <div className="cart-final-container_total_ticket">{/**cambiar */}
                        <input type="button" value="Comprar / Pagar" className="button-pay" />
                        <div className="cart-final-container_total_ticket_title">
                            <h2>Resumen de compra</h2>
                        </div>
                        <div className="cart-final-container_total_ticket_resume">
                            <span>{countItemsInCart()} {countItemsInCart() > 1 ? 'productos' : 'producto'}</span>
                            <span>Entrega Gratis</span>
                        </div>
                        <div className="cart-final-container_total_ticket_subtotal">
                            <span>Total</span>
                            <span>{sumTotalPrice()}</span>
                        </div>
                    </div>
                    <div className="cart-final-container_total_options">
                        <h4>MEDIOS DE PAGO</h4>
                        <img alt="" src="../src/assets/icons/icons8-visa-48.png" />
                        <img alt="" src="../src/assets/icons/icons8-mastercard-48.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartFinal;