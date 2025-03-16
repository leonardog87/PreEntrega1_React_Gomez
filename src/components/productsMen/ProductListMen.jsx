import "./ProductListMen.scss";
import ProductCard from "../productCard/ProductCard";
// import useFetch from "../../hooks/useFetch";
import Loader from "../loader/loader";
import CoreHeader from "../coreHeader/CoreHeader";
import { useFilter } from "../../hooks/useFilter";

const ProductListMen = () => {

    // const { data } = useFetch();

    const { filter } = useFilter();

    const menProducts = filter.filter(product => product.sex === 'men');

    if (menProducts.length > 0) {
        return (
            <>
                <div className="core-container">
                    <CoreHeader text="Hombre"/>
                    <div className="product-gallery-container">
                        {menProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                url={product.url}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                quantity={product.quantity}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }
    else
        return <Loader />;
}

export default ProductListMen;