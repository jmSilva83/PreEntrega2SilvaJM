// import '../index.css';
// import { useState } from "react";
// import CartWidget from "./CartWidget";
// import { FaXbox } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";

// // Importar Link si vas a utilizarlo cuando tengas componentes asociados a las rutas
// // import { Link } from "react-router-dom";

// const NavBar = () => {
//     const [showCategories, setShowCategories] = useState(false);

//     const handleCategoriesToggle = () => {
//         setShowCategories(!showCategories);
//     };

//     return (
//         <header className="bg-green-500 flex-shrink-0">
//             <div className="container p-2 ml-6 flex items-center justify-between">
//                 <div className="mr-56">
//                     {/* Temporalmente deshabilitado Link */}
//                     {/* <Link to="/" className="text-2xl font-bold text-white"> */}
//                         <button className='text-white text-2xl hover:text-green-700'><FaXbox /></button>
//                     {/* </Link> */}
//                 </div>
//                 <div className="mx-72 flex items-center">
//                     <button className='text-white text-3xl hover:text-green-700'><CiSearch /></button>
//                     <form className="bg-white p-2 w-96 rounded-lg ml-2">
//                         <input
//                             type="text"
//                             className="w-full outline-none border-none"
//                             placeholder="Buscar..."
//                         />
//                     </form>
//                 </div>
//                 <div className="flex-grow">
//                     {/* ... Código de búsqueda */}
//                 </div>
//                 <div className="mx-24 flex items-center">
//                     <ul className="flex space-x-4">
//                         <li>
//                             <button
//                                 className="text-white hover:text-green-700 ButtonNav"
//                                 onClick={handleCategoriesToggle}
//                             >
//                                 Categorías
//                             </button>
//                             {showCategories && (
//                                 <ul className="absolute bg-yellow-600 border p-1 text-gray-800 rounded-lg ">
//                                     <li>
//                                         {/* Temporalmente deshabilitado Link */}
//                                         {/* <Link to="/oferta-semanal" className="hover:underline"> */}
//                                             <button className="hover:underline">
//                                                 Oferta Semanal
//                                             </button>
//                                         {/* </Link> */}
//                                     </li>
//                                     <li>
//                                         {/* Temporalmente deshabilitado Link */}
//                                         {/* <Link to="/juegos-aaa" className="hover:underline"> */}
//                                             <button className="hover:underline">
//                                                 Juegos AAA
//                                             </button>
//                                         {/* </Link> */}
//                                     </li>
//                                     <li>
//                                         {/* Temporalmente deshabilitado Link */}
//                                         {/* <Link to="/juegos-indies" className="hover:underline"> */}
//                                             <button className="hover:underline">
//                                                 Juegos Indies
//                                             </button>
//                                         {/* </Link> */}
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             {/* Temporalmente deshabilitado Link */}
//                             {/* <Link to="/productos" className="text-white hover:text-green-700 ButtonNav"> */}
//                                 <button className="text-white hover:text-green-700 ButtonNav">
//                                     Productos
//                                 </button>
//                             {/* </Link> */}
//                         </li>
//                         <li>
//                             {/* Temporalmente deshabilitado Link */}
//                             {/* <Link to="/contacto" className="text-white hover:text-green-700 ButtonNav"> */}
//                                 <button className="text-white hover:text-green-700 ButtonNav">
//                                     Contacto
//                                 </button>
//                             {/* </Link> */}
//                         </li>
//                         <li>
//                             <button className='text-white hover:text-green-700'>
//                                 <CartWidget />
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default NavBar;

// import '../index.css';
// import { useState } from "react";
// import CartWidget from "./CartWidget";
// import { FaXbox } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";

// const NavBar = () => {
//     const [showCategories, setShowCategories] = useState(false);

//     const handleCategoriesToggle = () => {
//         setShowCategories(!showCategories);
//     };

//     return (
//         <header className="bg-green-500 flex-shrink-0">
//             <div className="container p-2 ml-6 flex items-center justify-between">
//                 <div className="mr-56">
//                     <button
//                         className="text-white text-2xl hover:shadow-neumorphism hover:rounded-full"
//                         onClick={() => window.location.href = '/'}
//                     >
//                         <FaXbox />
//                     </button>
//                 </div>
//                 <div className="mx-72 flex items-center">
//                     <button className="text-white text-3xl hover:text-green-700"><CiSearch /></button>
//                     <form className="bg-white p-2 w-96 rounded-lg ml-2">
//                         <input
//                             type="text"
//                             className="w-full outline-none border-none"
//                             placeholder="Buscar..."
//                         />
//                     </form>
//                 </div>
//                 <div className="flex-grow">
//                     {/* ... Código de búsqueda */}
//                 </div>
//                 <div className="mx-24 flex items-center">
//                     <ul className="flex space-x-4">
//                         <li>
//                             <button
//                                 className="text-white hover:text-green-700 ButtonNav"
//                                 onClick={handleCategoriesToggle}
//                             >
//                                 Categorías
//                             </button>
//                             {showCategories && (
//                                 <ul className="absolute bg-yellow-600 border p-1 text-gray-800 rounded-lg ">
//                                     <li>
//                                         <button className="hover:underline">
//                                             Oferta Semanal
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="hover:underline">
//                                             Juegos AAA
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="hover:underline">
//                                             Juegos Indies
//                                         </button>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700 ButtonNav">
//                                 Productos
//                             </button>
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700 ButtonNav">
//                                 Contacto
//                             </button>
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700">
//                                 <CartWidget />
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default NavBar;

// import '../index.css';
// import { useState } from "react";
// import CartWidget from "./CartWidget";
// import { FaXbox } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";

// const NavBar = () => {
//     const [showCategories, setShowCategories] = useState(false);

//     const handleCategoriesToggle = () => {
//         setShowCategories(!showCategories);
//     };

//     return (
//         <header className="bg-green-500 flex-shrink-0">
//             <div className="container p-2 ml-6 flex items-center justify-between">
//                 <div className="mr-56">
//                     <button
//                         className="text-white text-2xl hover:shadow-neumorphism hover:rounded-full"
//                         onClick={() => window.location.href = '/'}
//                     >
//                         <FaXbox />
//                     </button>
//                 </div>
//                 <div className="mx-72 flex items-center">
//                     <button className="text-white text-3xl hover:text-green-700"><CiSearch /></button>
//                     <form className="bg-white p-2 w-96 rounded-lg ml-2">
//                         <input
//                             type="text"
//                             className="w-full outline-none border-none"
//                             placeholder="Buscar..."
//                         />
//                     </form>
//                 </div>
//                 <div className="flex-grow">
//                     {/* ... Código de búsqueda */}
//                 </div>
//                 <div className="mx-24 flex items-center">
//                     <ul className="flex space-x-4">
//                         <li>
//                             <button
//                                 className="text-white hover:text-green-700 ButtonNav"
//                                 onClick={handleCategoriesToggle}
//                             >
//                                 Categorías
//                             </button>
//                             {showCategories && (
//                                 <ul className="absolute bg-yellow-600 border p-1 text-gray-800 rounded-lg ">
//                                     <li>
//                                         <button className="hover:underline">
//                                             Oferta Semanal
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="hover:underline">
//                                             Juegos AAA
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="hover:underline">
//                                             Juegos Indies
//                                         </button>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700 ButtonNav">
//                                 Productos
//                             </button>
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700 ButtonNav">
//                                 Contacto
//                             </button>
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700">
//                                 <CartWidget />
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default NavBar;

// NavBar.jsx
// import { Link } from "react-router-dom";
// import "../index.css";
// import { useState } from "react";
// import CartWidget from "./CartWidget";
// import { FaXbox } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";

// const NavBar = () => {
//     const [showCategories, setShowCategories] = useState(false);

//     const handleCategoriesToggle = () => {
//         setShowCategories(!showCategories);
//     };

//     return (
//         <header className="bg-green-500 flex-shrink-0">
//             <div className="container p-2 ml-6 flex items-center justify-between">
//                 <div className="mr-56">
//                     <button
//                         className="text-white text-2xl hover:shadow-neumorphism hover:rounded-full"
//                         onClick={() => (window.location.href = "/")}
//                     >
//                         <FaXbox />
//                     </button>
//                 </div>
//                 <div className="mx-72 flex items-center">
//                     <button className="text-white text-3xl hover:text-green-700">
//                         <CiSearch />
//                     </button>
//                     <form className="bg-white p-2 w-96 rounded-lg ml-2">
//                         <input
//                             type="text"
//                             className="w-full outline-none border-none"
//                             placeholder="Buscar..."
//                         />
//                     </form>
//                 </div>
//                 <div className="flex-grow">{/* ... Código de búsqueda */}</div>
//                 <div className="mx-24 flex items-center">
//                     <ul className="flex space-x-4">
//                         <li>
//                             <button
//                                 className="text-white hover:text-green-700 ButtonNav"
//                                 onClick={handleCategoriesToggle}
//                             >
//                                 Categorías
//                             </button>
//                             {showCategories && (
//                                 <ul className="absolute text-center bg-yellow-600 border p-1 text-gray-800 rounded-lg ">
//                                     <li>
//                                         <button className="hover:underline">
//                                             Acción
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="hover:underline">
//                                             Aventura
//                                         </button>
//                                     </li>
//                                     <li>
//                                         <button className="hover:underline">
//                                             RPG
//                                         </button>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <Link to="/ItemListPage">
//                                 <button className="text-white hover:text-green-700 ButtonNav">
//                                     Productos
//                                 </button>
//                             </Link>
//                         </li>
//                         <li>
//                             <button className="text-white hover:text-green-700 ButtonNav">
//                                 Contacto
//                             </button>
//                         </li>
//                         <li>
//                             <Link to="/cart">
//                                 <button className="text-white hover:text-green-700">
//                                     <CartWidget />
//                                 </button>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default NavBar;

//modifique el menu desplegable de categorias abajo

import { NavLink } from "react-router-dom";
import "../index.css";
import { useState, useEffect, useRef } from "react";
import CartWidget from "./CartWidget";
import { FaXbox } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import cat from "../utils/MockProductosAsync.json";
import { fakeApiCall } from "../utils/fakeApiCall";
const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const categoriesRef = useRef(null);

    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        fakeApiCall(cat).then((res) => {
            setCategorias(res.categorias);
        });
    }, []);
    console.log(categorias);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                showCategories &&
                categoriesRef.current &&
                !categoriesRef.current.contains(event.target)
            ) {
                setShowCategories(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCategories]);

    const handleCategoriesToggle = () => {
        setShowCategories(!showCategories);
    };

    return (
        <header className="bg-green-500 flex-shrink-0">
            <div className="container p-2 ml-6 flex items-center justify-between">
                <div className="mr-56">
                    <NavLink to="/">
                        <button
                            className="text-white text-2xl hover:shadow-neumorphism hover:rounded-full">
                            <FaXbox />
                        </button>
                    </NavLink>
                </div>
                <div className="mx-72 flex items-center">
                    <button className="text-white text-3xl hover:text-green-700">
                        <CiSearch />
                    </button>
                    <form className="bg-white p-2 w-96 rounded-lg ml-2">
                        <input
                            type="text"
                            className="w-full outline-none border-none"
                            placeholder="Buscar..."
                        />
                    </form>
                </div>
                <div className="flex-grow">{/* ... Código de búsqueda */}</div>
                <div className="mx-24 flex items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <button
                                className="text-white hover:text-green-700 ButtonNav"
                                onClick={handleCategoriesToggle}
                            >
                                Categorías
                            </button>
                            {showCategories && categorias.length > 0 && (
                                <ul
                                    ref={categoriesRef}
                                    className="absolute text-center bg-yellow-600 border px-5 text-gray-800 rounded-lg "
                                >
                                    {categorias.map(({ id, nombre }) => (<>
                                    <NavLink to={`/category/${id}`}>
                                        <button className="hover:underline">
                                            {nombre}
                                        </button>
                                    </NavLink>
                                    </>))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <NavLink to="/ItemListPage">
                                <button className="text-white hover:text-green-700 ButtonNav">
                                    Productos
                                </button>
                            </NavLink>
                        </li>
                        <li>
                            <button className="text-white hover:text-green-700 ButtonNav">
                                Contacto
                            </button>{" "}
                            {/*agregar el wp aca*/}
                        </li>
                        <li>
                            <NavLink to="/cart">
                                <button className="text-white hover:text-green-700">
                                    <CartWidget />
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
