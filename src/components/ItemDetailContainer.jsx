// // Importa React
// import "react";
// import Item from "./Item";
// import productos from "../utils/MockProductosAsync.json";
// import { useCart } from "../components/CartUtils";

// const ItemList = () => {
//     const { addItemToCart } = useCart(); // Obtiene la función para agregar al carrito desde el contexto

//     const mitad1 = productos.slice(0, Math.ceil(productos.length / 2));
//     const mitad2 = productos.slice(Math.ceil(productos.length / 2));

//     return (
//         <div className="container mx-auto flex text-green-500  pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {mitad1.map((producto) => (
//                     // Pasa la función addItemToCart al componente Item
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addItemToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {mitad2.map((producto) => (
//                     // Pasa la función addItemToCart al componente Item
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addItemToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemList;

// import "react";
// import Item from "./Item";
// import productos from "../utils/MockProductosAsync.json";
// import { useCart } from "../components/CartUtils";  // Corregir la importación

// const ItemList = () => {
//     const { addItemToCart } = useCart();

//     const mitad1 = productos.slice(0, Math.ceil(productos.length / 2));
//     const mitad2 = productos.slice(Math.ceil(productos.length / 2));

//     return (
//         <div className="container mx-auto flex text-green-500  pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {mitad1.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addItemToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {mitad2.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addItemToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemList;

// import "react";
// import Item from "./Item";
// import productos from "../utils/MockProductosAsync.json";

// const ItemList = ({ onAddToCart }) => {
//     const mitad1 = productos.slice(0, Math.ceil(productos.length / 2));
//     const mitad2 = productos.slice(Math.ceil(productos.length / 2));

//     return (
//         <div className="container mx-auto flex text-green-500 pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {mitad1.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={onAddToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {mitad2.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={onAddToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemList;

// import "react";
// import PropTypes from "prop-types";
// import Item from "./Item";
// import productos from "../utils/MockProductosAsync.json";
// import { useCart } from "../components/CartUtils";

// const ItemList = () => {
//     const { addItemToCart } = useCart();

//     const mitad1 = productos.slice(0, Math.ceil(productos.length / 2));
//     const mitad2 = productos.slice(Math.ceil(productos.length / 2));

//     return (
//         <div className="container mx-auto flex text-green-500 pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {mitad1.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addItemToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {mitad2.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addItemToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// ItemList.propTypes = {
//     onAddToCart: PropTypes.func.isRequired, // Agrega esta línea para validar la prop onAddToCart
// };

// export default ItemList;

// Elimina la importación de PropTypes si no planeas usarlo directamente en este archivo
// import PropTypes from "prop-types";

// import "react";
// import Item from "./Item";
// import productos from "../utils/MockProductosAsync.json";
// import { useCart } from "../components/CartUtils";

// const ItemList = () => {
//     const { addToCart } = useCart();

//     const mitad1 = productos.slice(0, Math.ceil(productos.length / 2));
//     const mitad2 = productos.slice(Math.ceil(productos.length / 2));

//     return (
//         <div className="container mx-auto flex text-green-500 pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {mitad1.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {mitad2.map((producto) => (
//                     <Item
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemList;

// import {ItemDetail} from "./ItemDetail";
// import productos from "../utils/MockProductosAsync.json";
// import { useCart } from "./CartUtils";

// const ItemDetailContainer = () => {
//     const { addToCart } = useCart();

//     // Convertir el objeto de productos en un array
//     const productosArray = Object.values(productos.productos);

//     // Dividir el array en dos partes
//     const primeraMitad = productosArray.slice(
//         0,
//         Math.ceil(productosArray.length / 2)
//     );
//     const segundaMitad = productosArray.slice(
//         Math.ceil(productosArray.length / 2)
//     );

//     return (
//         <div className="container mx-auto flex text-green-500 pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {primeraMitad.map((producto) => (
//                     <ItemDetail
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {segundaMitad.map((producto) => (
//                     <ItemDetail
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemDetailContainer;

//agrego el fakeApiCall

// import { useEffect, useState } from "react";
// import { fakeApiCall } from "../utils/fakeApiCall";
// import { useCart } from "./CartUtils";
// import productos from "../utils/MockProductosAsync.json";
// import ItemDetail from "./ItemDetail";

// const ItemDetailContainer = () => {
//     const { addToCart } = useCart();
//     const [productsCharged, setProductsCharged] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         fakeApiCall(productos).then((resp) => {
//             setProductsCharged(resp);
//             setLoading(false);
//         });
//     }, []);

//     if (loading) return <h1>Cargando...</h1>;

//     // Convertir el objeto de productos en un array
//     const productosArray = Object.values(productsCharged.productos);
//     // Dividir el array en dos partes
//     const primeraMitad = productosArray.slice(
//         0,
//         Math.ceil(productosArray.length / 2)
//     );
//     const segundaMitad = productosArray.slice(
//         Math.ceil(productosArray.length / 2)
//     );

//     return (
//         <div className="container mx-auto flex text-green-500 pt-28 flex-col">
//             {/* Primera fila */}
//             <div className="flex">
//                 {primeraMitad.map((producto) => (
//                     <ItemDetail
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addToCart}
//                     />
//                 ))}
//             </div>

//             {/* Segunda fila */}
//             <div className="flex">
//                 {segundaMitad.map((producto) => (
//                     <ItemDetail
//                         key={producto.id}
//                         producto={producto}
//                         onAddToCart={addToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ItemDetailContainer;

import { useEffect, useState } from "react";
import { fakeApiCall } from "../utils/fakeApiCall";
import { useCart } from "./CartUtils";
import ItemDetail from "./ItemDetail";
import prod from "../utils/MockProductosAsync.json";
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = ({productos}) => {
    const { addToCart } = useCart();
    const [productsCharged, setProductsCharged] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fakeApiCall(prod).then((resp) => {
            setProductsCharged(resp);
            setLoading(false);
        });
    }, []);

    if (loading) return <h1 className="text-center justify-center text-3xl pt-8"><CircularProgress color="secondary" /></h1>;

    // Convertir el objeto de productos en un array
    /* const productosArray = Object.values(productsCharged.productos); */
    // Dividir el array en dos partes
    /* const primeraMitad = productosArray.slice(
        0,
        Math.ceil(productosArray.length / 2)
    );
    const segundaMitad = productosArray.slice(
        Math.ceil(productosArray.length / 2)
    ); */

    return (
        <div className="container mx-auto flex text-green-500 pt-28 flex-col">
            {productos.map((item, index)=>(
                <ItemDetail key={index} producto={item} onAddToCart={addToCart} />
            ))}


            {/* <div className="flex">
                {primeraMitad.map((producto) => (
                    <ItemDetail
                        key={producto.id}
                        producto={producto}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>

            
            <div className="flex">
                {segundaMitad.map((producto) => (
                    <ItemDetail
                        key={producto.id}
                        producto={producto}
                        onAddToCart={addToCart}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default ItemDetailContainer;
