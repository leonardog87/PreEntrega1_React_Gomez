import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const showCart = () => {
        cartContainer.style.display = 'block';
    }

    const hideCart = () => {
        cartContainer.style.display = 'none';
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartContainer && !cartContainer.contains(event.target)) {
                hideCart();
            }
        };

        const closeCart = document.addEventListener('mousedown', handleClickOutside);
        return () => {
            closeCart;
        };
    }, []);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart.length > 0) {
            setCart(storedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = product => {
        const IfExist = cart.some(item => item.id === product.id)
        if (IfExist) {
            const products = cart.map(item => {
                if (item.id === product.id) {
                    if (item.quantity < product.stock) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        alert('No more stock available');
                        return item;
                    }
                }
                return item;
            });
            setCart(products);
        } else {
            if (product.stock > 0) {
                setCart([...cart, { ...product, quantity: 1 }]);
            } else {
                alert('No stock available');
            }
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
            const price = parseFloat(item.price)
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