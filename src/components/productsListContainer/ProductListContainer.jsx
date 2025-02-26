import "./ProductListContainer.scss";
import ProductCard from "../productCard/ProductCard";
// import useFetch from "../../hooks/useFetch";
import Loader from "../loader/loader";
import CoreHeader from "../coreHeader/CoreHeader";
import { useState } from "react";
import { useEffect } from "react";
import { useFilter } from "../../hooks/useFilter";

const ProductListContainer = () => {

    const { filter } = useFilter();

    // const { data } = useFetch();

    if (filter.length > 0) {
        return (
            <>
                <div className="core-container">
                    <CoreHeader text="Calzado" />
                    <div className="product-gallery-container">
                        {filter.map((product) => (
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