import "./ProductListContainer.scss";
import ProductCard from "../productCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/loader";
import CoreHeader from "../coreHeader/CoreHeader";

const ProductListContainer = () => {

    const { data } = useFetch();

    if (data.length > 0) {
        return (
            <>
                <div className="core-container">
                    <CoreHeader text="Calzado"/>
                    <div className="product-gallery-container">
                        {data.map((product) => (
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

export default ProductListContainer;