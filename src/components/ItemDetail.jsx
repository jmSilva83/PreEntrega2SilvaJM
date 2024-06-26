// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ItemDetail = ({ producto, onAddToCart }) => {
//     const [imagen, setImagen] = useState("");
//     const [estadoCarga, setEstadoCarga] = useState("cargando");
//     const [cantidad, setCantidad] = useState(1);

//     useEffect(() => {
//         const obtenerImagen = async () => {
//             try {
//                 if (!producto || !producto.imagen) {
//                     throw new Error("Producto o imagen no definidos");
//                 }

//                 const response = await fetch(producto.imagen);

//                 if (response.ok) {
//                     const url = response.url;

//                     setTimeout(() => {
//                         setImagen(url);
//                         setEstadoCarga("completo");
//                     }, 1000);
//                 } else {
//                     throw new Error("Error al cargar la imagen");
//                 }
//             } catch (error) {
//                 console.error("Error al cargar la imagen:", error);
//                 setEstadoCarga("error");
//             }
//         };

//         obtenerImagen();
//     }, [producto]);

//     const handleCantidadChange = (e) => {
//         const nuevaCantidad = parseInt(e.target.value, 10);
//         if (!isNaN(nuevaCantidad)) {
//             setCantidad(nuevaCantidad);
//         }
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     const handleAgregarAlCarrito = () => {
//         onAddToCart(producto, cantidad);
//         toast.success(
//             `Has agregado ${cantidad} ${
//                 cantidad === 1 ? "unidad" : "unidades"
//             } de ${producto?.nombre || "Nombre no definido"} al carrito.`,
//             {
//                 theme: "dark",
//             }
//         );
//     };

//     const handleVerMas = () => {
//         const descripcion = producto?.descripcion || "Descripción no definida";

//         Swal.fire({
//             title: producto?.nombre || "Nombre no definido",
//             html: `<p><b>Descripción:</b></p><p>${descripcion}</p><br/>
//                 <p><b>Precio:</b> $ ${producto?.precio || 0}</p>`,
//             imageUrl: producto?.imagen || "URL_POR_DEFECTO_SI_NO_HAY_IMAGEN",
//             imageWidth: 400,
//             imageHeight: 200,
//             imageAlt: producto?.nombre || "Nombre no definido",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Agregar al carrito",
//             cancelButtonText: "Cancelar",
//             background: "#222831",
//             didOpen: () => {
//                 const modal = Swal.getPopup();
//                 modal.style.color = "#f2f2f2";
//             },
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 handleAgregarAlCarrito();
//             }
//         });
//     };

//     return (
//         <div className="flex flex-wrap justify-center">
//             <div className="neumorphism border p-4 rounded-md text-center ButtonBlur m-2">
//                 <h2 className="mb-2">
//                     {producto?.nombre || "Nombre no definido"}
//                 </h2>

//                 {estadoCarga === "cargando" && <p>Cargando...</p>}
//                 {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//                 {estadoCarga === "completo" && (
//                     <img
//                         src={imagen}
//                         alt={producto?.nombre || "Imagen no definida"}
//                         className="w-64 mx-auto"
//                     />
//                 )}

//                 <p className="m-2 text-xl rounded-lg text-green-500">
//                     {"$"} {producto?.precio || 0}
//                 </p>

//                 <div className="flex items-center justify-center">
//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                         onClick={handleRestarCantidad}
//                     >
//                         -
//                     </button>
//                     <input
//                         type="text"
//                         value={cantidad}
//                         onChange={handleCantidadChange}
//                         className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                     />
//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                         onClick={handleSumarCantidad}
//                     >
//                         +
//                     </button>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                         onClick={handleVerMas}
//                     >
//                         Ver más
//                     </button>

//                     <button
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                         onClick={handleAgregarAlCarrito}
//                     >
//                         Agregar al carrito
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// ItemDetail.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         categoria: PropTypes.number,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//         descripcion: PropTypes.string,
//     }).isRequired,
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default ItemDetail;


import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ producto, onAddToCart }) => {
    const [imagen, setImagen] = useState("");
    const [estadoCarga, setEstadoCarga] = useState("cargando");
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const obtenerImagen = async () => {
            try {
                if (!producto || !producto.imagen) {
                    throw new Error("Producto o imagen no definidos");
                }

                const response = await fetch(producto.imagen);

                if (response.ok) {
                    const url = response.url;

                    setTimeout(() => {
                        setImagen(url);
                        setEstadoCarga("completo");
                    }, 2000);
                } else {
                    throw new Error("Error al cargar la imagen");
                }
            } catch (error) {
                console.error("Error al cargar la imagen:", error);
                setEstadoCarga("error");
            }
        };

        obtenerImagen();
    }, [producto]);

    const handleCantidadChange = (e) => {
        const nuevaCantidad = parseInt(e.target.value, 10);
        if (!isNaN(nuevaCantidad)) {
            console.log("Nueva cantidad:", nuevaCantidad);
            setCantidad(nuevaCantidad);
        }
    };

    const handleRestarCantidad = () => {
        setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
        console.log("Cantidad restada:", cantidad);
    };

    const handleSumarCantidad = () => {
        setCantidad((prevCantidad) => prevCantidad + 1);
        console.log("Cantidad sumada:", cantidad);
    };

    const handleAgregarAlCarrito = () => {
        // Validar que la cantidad sea un número entero y mayor que cero
        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            toast.error("La cantidad seleccionada no es válida", { theme: "dark" });
            return;
        }

        onAddToCart(producto, cantidad);
        toast.success(
            `Has agregado ${cantidad} ${
                cantidad === 1 ? "unidad" : "unidades"
            } de ${producto?.nombre || "Nombre no definido"} al carrito.`,
            {
                theme: "dark",
            }
        );
    };

    const handleVerMas = () => {
        const descripcion = producto?.descripcion || "Descripción no definida";

        Swal.fire({
            title: producto?.nombre || "Nombre no definido",
            html: `<p><b>Descripción:</b></p><p>${descripcion}</p><br/>
                <p><b>Precio:</b> $ ${producto?.precio || 0}</p>`,
            imageUrl: producto?.imagen || "URL_POR_DEFECTO_SI_NO_HAY_IMAGEN",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: producto?.nombre || "Nombre no definido",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Agregar al carrito",
            cancelButtonText: "Cancelar",
            background: "#222831",
            didOpen: () => {
                const modal = Swal.getPopup();
                modal.style.color = "#f2f2f2";
            },
        }).then((result) => {
            if (result.isConfirmed) {
                handleAgregarAlCarrito();
            }
        });
    };

    return (
        <div className="flex flex-wrap justify-center">
            <div className="neumorphism border p-4 rounded-md text-center ButtonBlur m-2">
                <h2 className="mb-2">
                    {producto?.nombre || "Nombre no definido"}
                </h2>

                {estadoCarga === "cargando" && <p>Cargando...</p>}
                {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
                {estadoCarga === "completo" && (
                    <img
                        src={imagen}
                        alt={producto?.nombre || "Imagen no definida"}
                        className="w-64 mx-auto"
                    />
                )}

                <p className="m-2 text-xl rounded-lg text-green-500">
                    {"$"} {producto?.precio || 0}
                </p>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
                        onClick={handleRestarCantidad}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={cantidad}
                        onChange={handleCantidadChange}
                        className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
                    />
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
                        onClick={handleSumarCantidad}
                    >
                        +
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                        onClick={handleVerMas}
                    >
                        Ver más
                    </button>

                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                        onClick={handleAgregarAlCarrito}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    producto: PropTypes.shape({
        nombre: PropTypes.string,
        categoria: PropTypes.number,
        imagen: PropTypes.string,
        precio: PropTypes.number,
        descripcion: PropTypes.string,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ItemDetail;
