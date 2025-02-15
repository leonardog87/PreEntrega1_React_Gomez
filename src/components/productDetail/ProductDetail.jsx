import './ProductDetail.scss';

const ProductDetail = ({ id, url, alt, title, description, price, event }) => {

    return (
        <>
            <div className="core-container">
                <div className="product-detail-container">
                    <div className="product-detail-container-gallery-img">
                        <div className="product-detail-gallery">
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                            <div className="product-detail-gallery-box">
                                <a><img id={id} src={url} alt={alt} /></a>
                            </div>
                        </div>
                        <div className="product-detail-img">
                            <a><img id={id} src={url} alt={alt} /></a>
                        </div>
                    </div>

                    <div className="product-detail-container-description">
                        <div className="product-detail-description">
                            <div className="product-detail-description-text">
                                <div className="product-detail-description-text_title">
                                    <h2>{title}</h2>
                                </div>
                                <div className="product-detail-description-text_description">
                                    <p>{description}</p>
                                </div>
                                <div className="product-detail-description-text_price">
                                    <p>${price}</p>
                                </div>
                            </div>
                            <div className="product-detail-description-talles">
                                <div className="product-detail-description-talles_title">
                                    <p>Talles (US)</p>
                                </div>
                                <div className="product-detail-description-talles_numero">
                                    <input type="button" value="7" />
                                    <input type="button" value="7.5" />
                                    <input type="button" value="8" />
                                    <input type="button" value="8.5" />
                                    <input type="button" value="9" />
                                    <input type="button" value="9.5" />
                                    <input type="button" value="10" />
                                    <input type="button" value="10.5" />
                                    <input type="button" value="11" />
                                    <input type="button" value="11.5" />
                                    <input type="button" value="12" />
                                    <input type="button" value="13" />
                                    <input type="button" value="14" />
                                </div>
                            </div>
                            <div className="product-detail-description-talles_buyit_end_section">
                                <div className="product-detail-description-talles_buyit_button">
                                    <input type="button" value="Agregar al Carrito" onClick={event} />
                                </div>
                                <div className="publicity-box">
                                    <p>Hasta <span>6 cuotas sin interés</span> en bancos seleccionados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;