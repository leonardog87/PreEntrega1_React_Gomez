import './ProductCard.scss'

<<<<<<< HEAD
const ProductCard = ({ children, id, url, alt, title, description, price, quantity}) => {
=======
<<<<<<< HEAD
const ProductCard = ({ children, id, url, alt, title, description, price, quantity}) => {
=======
const ProductCard = ({ children, id, url, alt, title, description, price }) => {
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df

    return (
        <>
            <div className="product-card">
                <a href="#!">
                    <div className="product-card-img">
                        <img id={id} src={url} alt={alt} />
                    </div>
                </a>
                <div className="product-card-text">
                    <div className="product-card-text-component_tittle">
                        <p className="product-card-title">{title}</p>
                    </div>
                    <div className="product-card-text-component_description">
                        <p className="product-card-description">{description}</p>
                    </div>
                    <div className="product-card-text-component_price">
                        <p className="product-card-price">{price}</p>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default ProductCard