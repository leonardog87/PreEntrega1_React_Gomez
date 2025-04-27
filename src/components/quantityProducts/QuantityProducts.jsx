import './QuantityProducts.scss';

const QuantityProducts = ({ quantity, eventAdd, eventLess }) => {

    return (
        <>
            <div className="cantidad" id="quantyBox">
                <img src="../src/assets/icons/minus-16.png" alt="icon-minus16" id="icon-minus" className="icon-minus" onClick={eventLess} />
                <input className="cantidadcart" type="number" value={quantity} readOnly />
                <img src="../src/assets/icons/plus-16.png" alt="icon-plus16" id="icon-plus" className="icon-plus" onClick={eventAdd} />
            </div>
        </>
    )
}

export default QuantityProducts