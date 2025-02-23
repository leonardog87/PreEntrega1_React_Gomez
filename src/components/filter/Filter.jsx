import './Filter.scss';
import { Link } from 'react-router-dom'

const Filter = ({ text }) => {
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
                <div class="core-header-order-filter">
                    <input type="button" id="button-modified" value="Order" />
                    <input type="button" id="button-delete" value="Filter" />
                </div>
            </div>
        </>
    )
}

export default Filter;