import './ButtonAddToCart.scss'

const ButtonAddToCart = ({ text, id, event }) => {

    return (
        <>
            <input className="button-pay" type="button" value={text} id={id} onClick={event} />
        </>
    )
}

export default ButtonAddToCart