import './Filter.scss'
import IconClose from '../iconClose/IconClose'
import { useFilter } from '../../hooks/useFilter';
import ButtonFilter from '../buttonFilter/ButtonFilter';

const Filter = () => {
    
    const { hideFilter } = useFilter()

    return (
        <>
            <div className="filter-container" id="filterContainer">
                <div className="filter-header">
                    <div className="filter-title">
                        <p>Filtros</p>
                    </div>
                    <div className="filter-close">
                        <IconClose event={hideFilter} />
                    </div>
                </div>
                <div id="webFilter" className="filter-product">
                    <ButtonFilter text="PRECIO (DE MENOR A MAYOR)"/>
                    <ButtonFilter text="NOVEDADES"/>
                    <ButtonFilter text="LOS MAS VENDIDOS"/>
                    <ButtonFilter text="PRECIO (DE MAYOR A MENOR)"/>
                    {/* {cart?.map((product) => (
                        <ProductCard key={product.id} id={product.id} url={product.url} title={product.title} description={product.description} price={product.price}>
                            <ButtonsCartProductCard >
                                <IconGarbage event={() => removeToCart(product)} />
                                <QuantityProducts quantity={product.quantity} eventAdd={() => addToCart(product)} eventLess={() => lessToCart(product)} />
                            </ButtonsCartProductCard>
                        </ProductCard>)
                    )} */}
                </div>
            </div>
        </>
    )
}

export default Filter;