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

//     const contextValue = {
//         cartItems,
//         addToCart,
//         getCartQuantity,
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// CartProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// // CartContext.jsx
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

//     const contextValue = {
//         cartItems,
//         addToCart,
//         getCartQuantity,
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// CartProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default CartContext;

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

//     const contextValue = {
//         cartItems,
//         addToCart,
//         getCartQuantity,
//     };

//     return (
//         <CartContext.Provider value={contextValue}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// CartProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default CartContext;


import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        console.log(item)
        // Verificar si el producto ya está en el carrito
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart) {
            // Si el producto ya está en el carrito, no lo agregamos nuevamente
            return;
        }

        // Agregar el producto al carrito
        setCartItems((prevItems) => [...prevItems, item]);
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
