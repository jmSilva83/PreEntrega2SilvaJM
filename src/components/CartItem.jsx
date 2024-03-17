import PropTypes from "prop-types";

const CartItem = ({ item }) => {
    
    if (!item || !item.producto || !item.producto.id || item.cantidad === undefined) {
        return null;
    }

    
    const { producto, cantidad } = item;
    if (!producto || typeof producto.precio !== "number" || !producto.nombre || !producto.imagen) {
        return null;
    }

    
    const subtotal = cantidad * producto.precio;
    const formattedSubtotal = isNaN(subtotal) ? 0 : subtotal;

    return (
        <div className="neumorphism p-2 rounded-md m-2 text-center">
            <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-32 h-32 object-cover mb-2"
            />
            <p className="text-white">Producto: {producto.nombre}</p>
            <p className="text-white">Cantidad: {cantidad}</p>
            <p className="text-white">Precio unitario: ${producto.precio}</p>
            <p className="text-white">Subtotal: ${formattedSubtotal.toFixed(2)}</p>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        producto: PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
            imagen: PropTypes.string.isRequired,
        }),
        cantidad: PropTypes.number,
    }).isRequired,
};

export default CartItem;
