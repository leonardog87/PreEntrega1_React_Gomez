import './CountProducts.scss'

const CountProducts = ({ quantityProducts }) => {

    return (
        <>
            <div className="count-products">
                <p>{quantityProducts}</p>
            </div>
        </>
    )
}

export default CountProducts