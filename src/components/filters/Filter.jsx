import './Filter.scss'
import IconClose from '../iconClose/IconClose'
import { useFilter } from '../../hooks/useFilter';
import ButtonFilter from '../buttonFilter/ButtonFilter';
import { Link } from 'react-router-dom';

const Filter = () => {

    const { hideFilter, selectEffect, deleteFilterOrder } = useFilter()

    return (
        <>
            <div className="filter-container" id="filterContainer">
                <div className="filter-header">
                    <div className="filter-title">
                        <p>Filtrar y ordenar</p>
                        <Link onClick={deleteFilterOrder}>Eliminar todo</Link>
                    </div>
                    <div className="filter-close">
                        <IconClose event={hideFilter} />
                    </div>
                </div>
                <div id="webFilter" className="filter-product">
                    <ButtonFilter text="PRECIO (DE MENOR A MAYOR)" id="toHigh" event={selectEffect} />
                    <ButtonFilter text="NOVEDADES" id="newThings" event={selectEffect} />
                    <ButtonFilter text="LOS MAS VENDIDOS" id="moreSellers" event={selectEffect} />
                    <ButtonFilter text="PRECIO (DE MAYOR A MENOR)" id="toLow" event={selectEffect} />
                </div>
            </div>
        </>
    )
}

export default Filter;