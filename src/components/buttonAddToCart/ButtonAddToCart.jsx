import './ButtonAddToCart.scss'

const ButtonAddToCart = ({text, id, event}) => {

    return (
        <input className="product-card-button" type="button" value={text} id={id} onClick={event}/>
    )
}

export default ButtonAddToCart