import { useEffect, useState } from "react";
import { fakeApiCall } from "../utils/fakeApiCall";
import { useCart } from "./CartUtils";
import ItemDetail from "./ItemDetail";
import prod from "../utils/MockProductosAsync.json";
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

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
        <div className="container mx-auto flex text-green-500 justify-center pt-80 ">
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

ItemDetailContainer.propTypes = {
    productos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            
        })
    ).isRequired,
};

export default ItemDetailContainer;
