// import { useEffect, useState } from "react";
// import { useCart } from "./CartUtils";
// import ItemDetail from "./ItemDetail";
// import CircularProgress from '@mui/material/CircularProgress';
// import PropTypes from 'prop-types';



// const ItemDetailContainer = ({productos}) => {
//     const { addToCart } = useCart();
//     const [productsCharged, setProductsCharged] = useState({});
//     const [loading, setLoading] = useState(true);

//     if (loading) return <h1 className="text-center justify-center text-3xl pt-8"><CircularProgress color="secondary" /></h1>;

//     return (
//         <div className="container mx-auto flex text-green-500 justify-center pt-80">
//             {productos.map((item, index)=>(
//                 <ItemDetail key={index} producto={item} onAddToCart={addToCart} />
//             ))}
//         </div>
//     );
// };

// ItemDetailContainer.propTypes = {
//     productos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
            
//         })
//     ).isRequired,
// };

// export default ItemDetailContainer;


//ItemDetailContainer.jsx
// ItemDetailContainer.jsx
// import { useEffect, useState } from "react";
// import { useCart } from "./CartUtils";
// import ItemDetail from "./ItemDetail";
// import CircularProgress from '@mui/material/CircularProgress';
// import PropTypes from 'prop-types';

// const ItemDetailContainer = ({ productos }) => {
//     const { addToCart } = useCart();
//     const [loading, setLoading] = useState(false);

//     if (loading) return <h1 className="text-center justify-center text-3xl pt-8"><CircularProgress color="secondary" /></h1>;

//     return (
//         <div className="container mx-auto flex text-green-500 justify-center pt-80">
//             {productos.map((item) => (
//                 <ItemDetail key={item.id} producto={item} onAddToCart={addToCart} />
//             ))}
//         </div>
//     );
// };

// ItemDetailContainer.propTypes = {
//     productos: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             // Otros campos del producto...
//         })
//     ).isRequired,
// };

//export default ItemDetailContainer;


import { useEffect, useState } from "react";
import { useCart } from "./CartUtils";
import ItemDetail from "./ItemDetail";
import PropTypes from 'prop-types';
import Loader from "./Loaders";

const ItemDetailContainer = ({ productos }) => {
    const { addToCart } = useCart();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simular una carga de datos durante 2 segundos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        // Retornar una función de limpieza vacía
        return () => {
            clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
        };
    }, []);

    if (loading) return <h1 className="text-center justify-center text-3xl pt-8"><Loader /></h1>;

    return (
        <div className="container mx-auto flex text-green-500 justify-center pt-80">
            {productos.map((item) => (
                <ItemDetail key={item.id} producto={item} onAddToCart={addToCart} />
            ))}
        </div>
    );
};

ItemDetailContainer.propTypes = {
    productos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // Otros campos del producto...
        })
    ).isRequired,
};

export default ItemDetailContainer;
