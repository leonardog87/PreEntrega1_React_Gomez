import './ProductDetailContainer.scss';
import ProductDetail from '../productDetail/ProductDetail';
import { useEffect, useState } from 'react';
import UseFetch from '../../hooks/UseFetch';
import { useCart } from '../../hooks/useCart';
//connect to firebase
import { db } from '../../hooks/database';
import { getDocs, collection } from 'firebase/firestore';
import Loader from '../loader/loader';

async function fetch() {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
    });
    return data;
}

//connect to firebase

const ProductDetailContainer = () => {

    //connect to firebase
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch();
            setData(data);
        }
        fetchData();
    }, []);

    //connect to firebase

    // const { data } = UseFetch('../src/json/products.json');
    const { addToCart } = useCart();

    console.log(data)

    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (data && data.length > 0) {
                const productId = window.location.pathname.split('/').pop();
                const product = await new Promise((resolve) => {
                    const selected = data.find((item) => item.id === productId);
                    resolve(selected);
                });
                setSelectedProduct(product);
            }
        };

        fetchProduct();
    }, [data]);

    
    if (selectedProduct) 
        return (
            <>
                <div>
                    {selectedProduct && (
                        <ProductDetail
                            key={selectedProduct.id}
                            id={selectedProduct.id}
                            url={selectedProduct.url}
                            title={selectedProduct.title}
                            description={selectedProduct.description}
                            price={selectedProduct.price}
                            event={() => addToCart(selectedProduct)}
                        />
                    )}
                </div>
            </>
        );
    else
        return <Loader />;

   
}

export default ProductDetailContainer;