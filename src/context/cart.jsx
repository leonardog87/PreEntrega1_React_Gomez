import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const showCart = () => {
        cartContainer.style.display = 'block';
    }

    const hideCart = () => {
        cartContainer.style.display = 'none'
    }

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));

        if (storedCart.length > 0) {
// =======
//         if (storedCart.length > 1) {
// >>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
            setCart(storedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    }, [cart]);

    const addToCart = product => {
        const IfExist = cart.some(item => item.id === product.id)
        if (IfExist) {
            const products = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(products);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }


    const lessToCart = item => {
        const products = item.quantity === 1 ? item : item.quantity-- && item;
        setCart([...cart])
    }

    const removeToCart = product => {
        const products = cart.filter(item => item.id !== product.id)
        setCart([...products])
        localStorage.setItem('cart', JSON.stringify(products));
    }

    const sumTotalPrice = () => {
        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.price.slice(1))
            return acc + item.quantity * price
        }, 0)
        return total.toFixed(3)
    }

    const countItemsInCart = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            showCart,
            hideCart,
            cart,
            addToCart,
            lessToCart,
            removeToCart,
            sumTotalPrice,
            countItemsInCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}