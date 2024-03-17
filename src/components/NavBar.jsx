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
                                    className="absolute text-center bg-yellow-600 border px-5 text-gray-800 rounded-lg flex flex-col"
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
