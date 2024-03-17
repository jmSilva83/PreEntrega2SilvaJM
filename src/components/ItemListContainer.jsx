import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../utils/MockProductosAsync.json";
import { fakeApiCall } from "../utils/fakeApiCall";
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
    const { id } = useParams();
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fakeApiCall(categories).then((res) => {
            setResponse(res);
            setLoading(false);
        });
    }, []);

    if (loading) return <h1 className="text-center justify-center text-3xl pt-8"><CircularProgress color="secondary" /></h1>;

    const getProductosByCategory = (catId) => {
        if (catId) {
            return response.productos.filter(
                (product) => product.categoria === parseInt(catId)
            );
        }
    };

    const productsPorCategoria = getProductosByCategory(id);

    return (
        <>
            {productsPorCategoria &&
                <ItemDetailContainer productos ={productsPorCategoria}/>}
        </>
    );
};

export default ItemListContainer;
