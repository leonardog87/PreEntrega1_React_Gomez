import "./ProductListContainer.scss";
import ProductCard from "../productCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/loader";
import Filter from "../filter/Filter";

const ProductListContainer = () => {

    const { data } = useFetch();

    if (data.length > 0) {
        return (
            <>
                <div className="core-container">
                    <Filter text="Calzado"/>
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