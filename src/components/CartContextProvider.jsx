/* eslint-disable react-refresh/only-export-components */
// import { createContext, useContext, useState } from "react";
// import PropTypes from "prop-types";

// const CartContext = createContext();

// export const useCart = () => {
//     return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//     };

//     const getCartQuantity = () => {
//         return cartItems.length;
//     };

//     return (
//         <CartContext.Provider value={{ addToCart, getCartQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// CartProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

//mejora de datos y props

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const getCartQuantity = () => {
        return cartItems.length;
    };

    return (
        <CartContext.Provider value={{ addToCart, getCartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
    addToCart: PropTypes.func.isRequired,
    getCartQuantity: PropTypes.func.isRequired,
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
    addToCart: PropTypes.func.isRequired,
    getCartQuantity: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
