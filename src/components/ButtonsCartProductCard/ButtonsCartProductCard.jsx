import './ButtonsCartProductCard.scss'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
const ButtonsCartProductCard = ({ children }) => {

    return (
        <>
            <div className="cart-product-card-buttons">                
                {children}
<<<<<<< HEAD
=======
=======
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
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
            </div>
        </>
    )
}

export default ButtonsCartProductCard