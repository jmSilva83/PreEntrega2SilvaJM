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
