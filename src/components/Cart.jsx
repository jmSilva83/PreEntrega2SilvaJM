// // Cart.jsx
// import "react";
// import { useCart } from "./CartUtils";
// import CartItem from "./CartItem"; // Asegúrate de tener este componente creado

// const Cart = () => {
//     const { cartItems } = useCart();

//     return (
//         <div className="neumorphism p-4 rounded-md m-2 text-center">
//             <h2 className="text-white text-2xl font-bold mb-4">Carrito de Compras</h2>

//             {cartItems.length === 0 ? (
//                 <p className="text-white">No hay productos en el carrito</p>
//             ) : (
//                 <div>
//                     {cartItems.map((item) => (
//                         <CartItem key={item.producto.id} item={item} />
//                     ))}

//                     <div className="mt-4">
//                         <p className="text-lg font-semibold">
//                             Precio total:{" "}
//                             {/* Agrega aquí el cálculo del precio total */}
//                         </p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// Cart.propTypes = {};

// export default Cart;

// Cart.jsx

// import { useCart } from "./CartUtils";
// import CartItem from "./CartItem"; // Asegúrate de tener este componente creado

// const Cart = () => {
//     const { cartItems } = useCart();

//     return (
//         <div className="neumorphism p-4 rounded-md m-2 text-center">
//             <h2 className="text-white text-2xl font-bold mb-4">Carrito de Compras</h2>

//             {cartItems.length === 0 ? (
//                 <p className="text-white">No hay productos en el carrito</p>
//             ) : (
//                 <div>
//                     {cartItems.map((item) => (
//                         <CartItem key={item?.producto?.id ?? "defaultId"} item={item} />
//                     ))}

//                     <div className="mt-4">
//                         <p className="text-lg font-semibold">
//                             Precio total:{" "}
//                             {/* Agrega aquí el cálculo del precio total */}
//                         </p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// Cart.propTypes = {};

// export default Cart;

// // Cart.jsx
// import "react";
// import { useCart } from "./CartUtils";
// import CartItem from "./CartItem";

// const Cart = () => {
//     const { cartItems } = useCart();

//     return (
//         <div className="border-2 neumorphism p-4 rounded-md m-2 text-center">
//             <h2 className="text-white text-2xl font-bold mb-4">Carrito de Compras</h2>

//             {cartItems.length === 0 ? (
//                 <p className="text-white">No hay productos en el carrito</p>
//             ) : (
//                 <div>
//                     {cartItems.map((item, index) => (
//                         <CartItem key={index} item={item} />
//                     ))}

//                     <div className="mt-4">
//                         <p className="text-lg font-semibold">
//                             Precio total: {/* Agrega aquí el cálculo del precio total */}
//                         </p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;

// // Cart.jsx

// import { useCart } from "./CartUtils";
// import CartItem from "./CartItem";

// const Cart = () => {
//     const { cartItems } = useCart();

//     // Calcular el precio total
//     const totalPrice = cartItems.reduce((total, item) => {
//         // Verificar si el elemento tiene la estructura esperada
//         if (item && item.producto && typeof item.producto.precio === "number") {
//             return total + item.cantidad * item.producto.precio;
//         } else {
//             console.error(
//                 "El elemento del carrito no tiene la estructura esperada:",
//                 item
//             );
//             return total;
//         }
//     }, 0);

//     return (
//         <div className="">
//             <h2 className="text-center text-6xl font-mono text-green-400 pt-28">
//                 Carrito de Compras
//             </h2>

//             {cartItems.length === 0 ? (
//                 <p className="text-center text-4xl font-mono text-green-400 pt-28">No hay productos en el carrito</p>
//             ) : (
//                 <div>
//                     {cartItems.map((item, index) => (
//                         <CartItem key={index} item={item} />
//                     ))}

//                     <div className="mt-4">
//                         <p className="text-center text-4xl font-mono text-green-400 pt-28">
//                             Precio total: ${totalPrice.toFixed(2)}
//                         </p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;

import { useCart } from "./CartUtils";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartItems } = useCart();

    // Calcular el precio total
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.cantidad * item.producto.precio;
    }, 0);

    return (
        <div className="">
            <h2 className="text-center text-6xl font-mono text-green-400 pt-28">
                Carrito de Compras
            </h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-4xl font-mono text-green-400 pt-28">
                    No hay productos en el carrito
                </p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}

                    <div className="mt-4">
                        <p className="text-center text-4xl font-mono text-green-400 pt-28">
                            Precio total: ${totalPrice.toFixed(2)}
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline">
                            Comprar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
