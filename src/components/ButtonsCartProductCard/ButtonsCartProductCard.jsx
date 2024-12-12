import './ButtonsCartProductCard.scss'

const ButtonsCartProductCard = ({ quantity }) => {

    return (
        <>
            <div className="cart-product-card-buttons">
                <div className="#!">
                    <img className="tacho" src="src/assets/icons/delete_16.png" alt="img-list1" />
                </div>
                <div className="cantidad" id="quantyBox">
                    <img src="src/assets/icons/minus-16.png" alt="icon-minus16" id="icon-minus" className="icon-minus" />
                    <input className="cantidadcart" type="number" value={quantity} />
                    <img src="src/assets/icons/plus-16.png" alt="icon-plus16" id="icon-plus" className="icon-plus" />
                </div>
            </div>
        </>
    )
}

export default ButtonsCartProductCard