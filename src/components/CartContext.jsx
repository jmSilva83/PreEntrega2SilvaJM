import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, cantidad) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            setCartItems((prevItems) =>
                prevItems.map((i) => {
                    if (i.id === item.id) {
                        return { ...i, cantidad: i.cantidad + cantidad };
                    }
                    return i;
                })
            );
        } else {
            const newItem = { ...item, cantidad };
            setCartItems((prevItems) => [...prevItems, newItem]);
        }
    };

    const getCartQuantity = () => {
        return cartItems.length;
    };

    const contextValue = {
        cartItems,
        addToCart,
        getCartQuantity,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartContext;
