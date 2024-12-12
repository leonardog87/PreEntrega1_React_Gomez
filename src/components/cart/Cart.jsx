import './Cart.scss'
import ButtonAddToCart from '../buttonAddToCart/ButtonAddToCart';
import ProductCard from '../productCard/ProductCard';
import ButtonsCartProductCard from '../ButtonsCartProductCard/ButtonsCartProductCard'
import IconClose from '../iconClose/IconClose'
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
                {data?.map((product) => (
                    <ProductCard id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                        <ButtonsCartProductCard />
                        
                    </ProductCard>)
                )}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h3>Total</h3>
                    <h3 id="totalCart">$ 0</h3>
                </div>
                <div className="product-detail-description-talles_buyit_button-2">
                    <ButtonAddToCart text="Finalizar Compra" id="endBuyButton" event={function print() {console.log(cart)}} />
                </div>
            </div>
        </div>
    )
}

export default Cart