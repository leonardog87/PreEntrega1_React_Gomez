import './IconCart.scss'

const IconCart = ({event, children}) => {

    return (
        <>
            <a className="icon-cart" onClick={event}>
                <img src="../src/assets/icons/buy-img.png" alt="buy-img" />
                {children}
            </a>
        </>
    )
}

export default IconCart