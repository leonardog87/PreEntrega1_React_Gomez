import './ButtonsCartProductCard.scss'

const ButtonsCartProductCard = ({ children }) => {

    return (
        <>
            <div className="cart-product-card-buttons">                
                {children}
            </div>
        </>
    )
}

export default ButtonsCartProductCard