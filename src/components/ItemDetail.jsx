// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Counter from "./Counter";
// import "../index.css"; // Asegúrate de poner la ruta correcta

// const Item = ({ producto }) => {
//     const [imagen, setImagen] = useState("");
//     const [estadoCarga, setEstadoCarga] = useState("cargando");
//     const [setCantidad] = useState(0);

//     useEffect(() => {
//         const obtenerImagen = async () => {
//             try {
//                 if (!producto || !producto.imagen) {
//                     throw new Error("Producto o imagen no definidos");
//                 }

//                 const response = await fetch(producto.imagen);

//                 if (response.ok) {
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

//                     // Simulamos una demora de 1 segundo antes de establecer la imagen como completa
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

//     const handleCantidadChange = (newCantidad) => {
//         setCantidad(newCantidad);
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <Counter onQuantityChange={handleCantidadChange} />

//             {/* Agrega aquí el botón para agregar al carrito u otra lógica relacionada con el producto */}
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Counter from "./Counter";
// import "../index.css"; // Asegúrate de poner la ruta correcta

// const Item = ({ producto }) => {
//     const [imagen, setImagen] = useState("");
//     const [estadoCarga, setEstadoCarga] = useState("cargando");

//     useEffect(() => {
//         const obtenerImagen = async () => {
//             try {
//                 if (!producto || !producto.imagen) {
//                     throw new Error("Producto o imagen no definidos");
//                 }

//                 const response = await fetch(producto.imagen);

//                 if (response.ok) {
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

//                     // Simulamos una demora de 1 segundo antes de establecer la imagen como completa
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

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <Counter />

//             {/* Agrega aquí el botón para agregar al carrito u otra lógica relacionada con el producto */}
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Counter from "./Counter";
// import "../index.css"; // Asegúrate de poner la ruta correcta

// const Item = ({ producto, onAddToCart }) => {
//     const [imagen, setImagen] = useState("");
//     const [estadoCarga, setEstadoCarga] = useState("cargando");

//     useEffect(() => {
//         const obtenerImagen = async () => {
//             try {
//                 if (!producto || !producto.imagen) {
//                     throw new Error("Producto o imagen no definidos");
//                 }

//                 const response = await fetch(producto.imagen);

//                 if (response.ok) {
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

//                     // Simulamos una demora de 1 segundo antes de establecer la imagen como completa
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

//     const handleAddToCart = (quantity) => {
//         // Llama a la función onAddToCart pasando el producto y la cantidad
//         onAddToCart(producto, quantity);
//     };

//     return (
//         <div className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${estadoCarga === "completo" ? "" : "animate-pulse"}`}>
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${estadoCarga === "completo" ? "" : "hidden"}`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <Counter onQuantityChange={handleAddToCart} onAddToCart={() => handleAddToCart(1)} />

//             {/* Agrega aquí el botón para agregar al carrito u otra lógica relacionada con el producto */}
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
//     onAddToCart: PropTypes.func.isRequired, // Nueva prop para la función de agregar al carrito
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "../index.css"; // Asegúrate de poner la ruta correcta

// const Item = ({ producto, onAddToCart }) => {
//     const [imagen, setImagen] = useState("");
//     const [estadoCarga, setEstadoCarga] = useState("cargando");

//     useEffect(() => {
//         const obtenerImagen = async () => {
//             try {
//                 if (!producto || !producto.imagen) {
//                     throw new Error("Producto o imagen no definidos");
//                 }

//                 const response = await fetch(producto.imagen);

//                 if (response.ok) {
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

//                     // Simulamos una demora de 1 segundo antes de establecer la imagen como completa
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

//     return (
//         <div className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${estadoCarga === "completo" ? "" : "animate-pulse"}`}>
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${estadoCarga === "completo" ? "" : "hidden"}`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             {/* Agrega aquí el botón para agregar al carrito u otra lógica relacionada con el producto */}
//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 onClick={() => onAddToCart(producto, 1)}
//             >
//                 Agregar al carrito
//             </button>
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "../index.css";

// const Item = ({ producto, onAddToCart }) => {
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
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

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
//         const nuevaCantidad = parseInt(e.target.value, 10) || 1;
//         setCantidad(nuevaCantidad);
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <div className="flex items-center justify-center">
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                     onClick={handleRestarCantidad}
//                 >
//                     -
//                 </button>
//                 <input
//                     type="number"
//                     value={cantidad}
//                     onChange={handleCantidadChange}
//                     className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                 />
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                     onClick={handleSumarCantidad}
//                 >
//                     +
//                 </button>
//             </div>

//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={() => onAddToCart(producto, cantidad)}
//             >
//                 Agregar al carrito
//             </button>
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";
// import "../index.css";

// const Item = ({ producto, onAddToCart }) => {
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
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

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
//         const nuevaCantidad = parseInt(e.target.value, 10) || 1;
//         setCantidad(nuevaCantidad);
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     const handleVerMas = () => {
//         // Aquí puedes mostrar SweetAlert2 con los detalles del producto
//         Swal.fire({
//             title: producto?.nombre || "Nombre no definido",
//             text: `Detalles del producto: Precio: $${producto?.precio || 0}`,
//             icon: "info",
//         });
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <div className="flex items-center justify-center">
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                     onClick={handleRestarCantidad}
//                 >
//                     -
//                 </button>
//                 <input
//                     type="number"
//                     value={cantidad}
//                     onChange={handleCantidadChange}
//                     className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                 />
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                     onClick={handleSumarCantidad}
//                 >
//                     +
//                 </button>
//             </div>

//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={() => onAddToCart(producto, cantidad)}
//             >
//                 Agregar al carrito
//             </button>

//             <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={handleVerMas}
//             >
//                 Ver más
//             </button>
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "../index.css";

// const Item = ({ producto, onAddToCart }) => {
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
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

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
//         const nuevaCantidad = parseInt(e.target.value, 10) || 1;
//         setCantidad(nuevaCantidad);
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <div className="flex items-center justify-center">
//                 {/* Botones personalizados de suma y resta */}
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                     onClick={handleRestarCantidad}
//                 >
//                     -
//                 </button>
//                 <input
//                     type="text"
//                     value={cantidad}
//                     onChange={handleCantidadChange}
//                     className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                 />
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                     onClick={handleSumarCantidad}
//                 >
//                     +
//                 </button>
//             </div>

//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={() => onAddToCart(producto, cantidad)}
//             >
//                 Agregar al carrito
//             </button>
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//     }),
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";
// import "../index.css";

// const Item = ({ producto, onAddToCart }) => {
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
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

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
//         const nuevaCantidad = parseInt(e.target.value, 10) || 1;
//         setCantidad(nuevaCantidad);
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     const handleVerMas = () => {
//         const descripcion = producto?.descripcion || "Descripción no definida";

//         Swal.fire({
//             title: producto?.nombre || "Nombre no definido",
//             html: `<p><b>Descripción:</b></p><p>${descripcion}</p><br/>
//                 <p><b>Precio:</b> $${producto?.precio || 0}</p>`,
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
//                 onAddToCart(producto, cantidad);
//                 Swal.fire({
//                     title: "Agregado al carrito",
//                     text: `Has agregado ${cantidad} ${
//                         cantidad === 1 ? "unidad" : "unidades"
//                     } de ${
//                         producto?.nombre || "Nombre no definido"
//                     } al carrito.`,
//                     icon: "success",
//                     background: "#222831",
//                     didOpen: () => {
//                         const modal = Swal.getPopup();
//                         modal.style.color = "#f2f2f2";
//                     },

//                 });
//             }
//         });
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <div className="flex items-center justify-center">
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                     onClick={handleRestarCantidad}
//                 >
//                     -
//                 </button>
//                 <input
//                     type="text"
//                     value={cantidad}
//                     onChange={handleCantidadChange}
//                     className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                 />
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                     onClick={handleSumarCantidad}
//                 >
//                     +
//                 </button>
//             </div>

//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={() => onAddToCart(producto, cantidad)}
//             >
//                 Agregar al carrito
//             </button>

//             <button
//                 className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={handleVerMas}
//             >
//                 Ver más
//             </button>
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//         descripcion: PropTypes.string,
//     }),
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";
// import "../index.css";

// const Item = ({ producto, onAddToCart }) => {
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
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

//                     setTimeout(() => {
//                         setImagen(url);
//                         setEstadoCarga("completo");
//                     }, 2000);
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
//         const nuevaCantidad = parseInt(e.target.value, 10) || 1;
//         setCantidad(nuevaCantidad);
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     const handleVerMas = () => {
//         const descripcion = producto?.descripcion || "Descripción no definida";

//         Swal.fire({
//             title: producto?.nombre || "Nombre no definido",
//             html: `<p><b>Descripción:</b></p><p>${descripcion}</p><br/>
//                 <p><b>Precio:</b> $${producto?.precio || 0}</p>`,
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
//                 onAddToCart(producto, cantidad);
//                 Swal.fire({
//                     title: "Agregado al carrito",
//                     text: `Has agregado ${cantidad} ${
//                         cantidad === 1 ? "unidad" : "unidades"
//                     } de ${
//                         producto?.nombre || "Nombre no definido"
//                     } al carrito.`,
//                     icon: "success",
//                     background: "#222831",
//                     didOpen: () => {
//                         const modal = Swal.getPopup();
//                         modal.style.color = "#f2f2f2";
//                     },
//                 });
//             }
//         });
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <div className="flex items-center justify-center">
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                     onClick={handleRestarCantidad}
//                 >
//                     -
//                 </button>
//                 <input
//                     type="text"
//                     value={cantidad}
//                     onChange={handleCantidadChange}
//                     className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                 />
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                     onClick={handleSumarCantidad}
//                 >
//                     +
//                 </button>
//             </div>

//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={() => onAddToCart(producto, cantidad)}
//             >
//                 Agregar al carrito
//             </button>

//             <button
//                 className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={handleVerMas}
//             >
//                 Ver más
//             </button>
//         </div>
//     );
// };

// Item.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         categoria: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//         descripcion: PropTypes.string,
//     }),
//     onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;


// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Swal from "sweetalert2";
// import "../index.css";

// const ItemDetail = ({ producto }) => {
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
//                     const blob = await response.blob();
//                     const url = URL.createObjectURL(blob);

//                     setTimeout(() => {
//                         setImagen(url);
//                         setEstadoCarga("completo");
//                     }, 2000);
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
//         const nuevaCantidad = parseInt(e.target.value, 10) || 1;
//         setCantidad(nuevaCantidad);
//     };

//     const handleRestarCantidad = () => {
//         setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
//     };

//     const handleSumarCantidad = () => {
//         setCantidad((prevCantidad) => prevCantidad + 1);
//     };

//     const handleVerMas = () => {
//         const descripcion = producto?.descripcion || "Descripción no definida";

//         Swal.fire({
//             title: producto?.nombre || "Nombre no definido",
//             html: `<p><b>Descripción:</b></p><p>${descripcion}</p><br/>
//                 <p><b>Precio:</b> $${producto?.precio || 0}</p>`,
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
//                 // Aquí deberías definir cómo manejar la acción de agregar al carrito
//                 console.log("Agregado al carrito:", producto);
//             }
//         });
//     };

//     return (
//         <div
//             className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
//                 estadoCarga === "completo" ? "" : "animate-pulse"
//             }`}
//         >
//             <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

//             {estadoCarga === "cargando" && <p>Cargando...</p>}
//             {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
//             {estadoCarga === "completo" && (
//                 <img
//                     src={imagen}
//                     alt={producto?.nombre || "Imagen no definida"}
//                     className={`w-full h-auto ${
//                         estadoCarga === "completo" ? "" : "hidden"
//                     }`}
//                 />
//             )}

//             <p className="m-2 text-xl rounded-lg text-green-500">
//                 {"$"} {producto?.precio || 0}
//             </p>

//             <div className="flex items-center justify-center">
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
//                     onClick={handleRestarCantidad}
//                 >
//                     -
//                 </button>
//                 <input
//                     type="text"
//                     value={cantidad}
//                     onChange={handleCantidadChange}
//                     className="text-center w-16 bg-green-500 text-white py-2 px-1 outline-none"
//                 />
//                 <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
//                     onClick={handleSumarCantidad}
//                 >
//                     +
//                 </button>
//             </div>

//             <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
//                 onClick={handleVerMas}
//             >
//                 Ver más
//             </button>
//         </div>
//     );
// };

// ItemDetail.propTypes = {
//     producto: PropTypes.shape({
//         nombre: PropTypes.string,
//         categoria: PropTypes.string,
//         imagen: PropTypes.string,
//         precio: PropTypes.number,
//         descripcion: PropTypes.string,
//     }).isRequired,
// };

// export default ItemDetail;


import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import "../index.css";

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
                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);

                    setTimeout(() => {
                        setImagen(url);
                        setEstadoCarga("completo");
                    }, 1000);
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
            setCantidad(nuevaCantidad);
        }
    };


    const handleRestarCantidad = () => {
        setCantidad((prevCantidad) => Math.max(1, prevCantidad - 1));
    };

    const handleSumarCantidad = () => {
        setCantidad((prevCantidad) => prevCantidad + 1);
    };

    const handleVerMas = () => {
        const descripcion = producto?.descripcion || "Descripción no definida";

        Swal.fire({
            title: producto?.nombre || "Nombre no definido",
            html: `<p><b>Descripción:</b></p><p>${descripcion}</p><br/>
                <p><b>Precio:</b> $${producto?.precio || 0}</p>`,
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
                onAddToCart(producto, cantidad);
                Swal.fire({
                    title: "Agregado al carrito",
                    text: `Has agregado ${cantidad} ${
                        cantidad === 1 ? "unidad" : "unidades"
                    } de ${
                        producto?.nombre || "Nombre no definido"
                    } al carrito.`,
                    icon: "success",
                    background: "#222831",
                    didOpen: () => {
                        const modal = Swal.getPopup();
                        modal.style.color = "#f2f2f2";
                    },
                });
            }
        });
    };

    return (
        <div
            className={`neumorphism border p-4 rounded-md m-2 text-center ButtonBlur  ${
                estadoCarga === "completo" ? "" : "animate-pulse"
            }`}
        >
            <h2 className="mb-2">{producto?.nombre || "Nombre no definido"}</h2>

            {estadoCarga === "cargando" && <p>Cargando...</p>}
            {estadoCarga === "error" && <p>Error al cargar la imagen</p>}
            {estadoCarga === "completo" && (
                <img
                    src={imagen}
                    alt={producto?.nombre || "Imagen no definida"}
                    className={`w-full h-auto ${
                        estadoCarga === "completo" ? "" : "hidden"
                    }`}
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

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                onClick={handleVerMas}
            >
                Ver más
            </button>

            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
                onClick={() => onAddToCart(producto, cantidad)}
            >
                Agregar al carrito
            </button>
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
