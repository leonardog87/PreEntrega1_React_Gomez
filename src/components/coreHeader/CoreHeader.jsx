import './CoreHeader.scss';
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';
import { useFilter } from '../../hooks/useFilter';

const CoreHeader = ({ text }) => {
    
    const { showCart } = useCart()
    const { showFilter } = useFilter()

    return (
        <>
            <div className="core-header">
                <div className="core-header-pages">
                    <div className="order-pages">
                        <ul>
                        <li> <Link to="/">Index</Link></li>
                        </ul>
                    </div>
                    <div className="core-header-title">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="core-header-order-filter">
                    {/* <input type="button" id="button-order" value="Orden" /> */}
                    <input type="button" id="button-filter" value="Filtrar y ordenar" onClick={showFilter} />
                </div>
            </div>
        </>
    )
}

export default CoreHeader;