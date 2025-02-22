import './ProductCard.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({ children, id, url, alt, title, description, price, quantity }) => {

    return (
        <>
            <div className="product-card">
                <Link to={"/ProductDetailContainer/" + id}>
                    <div className="product-card-img">
                        <img id={id} src={url} alt={alt} />
                    </div>
                </Link>
                <div className="product-card-text">
                    <div className="product-card-text-component_tittle">
                        <p className="product-card-title">{title}</p>
                    </div>
                    <div className="product-card-text-component_description">
                        <p className="product-card-description">{description}</p>
                    </div>
                    <div className="product-card-text-component_price">
                        <p className="product-card-price">${price}</p>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default ProductCard