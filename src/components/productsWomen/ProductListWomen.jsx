import "./ProductListWomen.scss";
import ProductCard from "../productCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/loader";
import Filter from "../filter/Filter";

const ProductListWomen = () => {

    const { data } = useFetch();

    const menProducts = data.filter(product => product.sex === 'women');

    if (menProducts.length > 0) {
        return (
            <>
                <div className="core-container">
                    <Filter text="Mujer"/>
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

export default ProductListWomen;