// import "./App.css";
// import ItemList from "./components/ItemList";
// import ItemListcontainer from "./components/ItemListContainer";
// import Navbar from "./components/NavBar";

// function App() {
//     return (
//         <>
//             <Navbar />
//             <ItemListcontainer greeting="Hola Xboxer!" />
//             <ItemList/>
//         </>
//     );
// }

// export default App;

// // App.js
// import "./App.css";
// import { CartProvider } from "./components/CartContext"; // Asegúrate de poner la ruta correcta
// import ItemList from "./components/ItemList";
// import ItemListcontainer from "./components/ItemListContainer";
// import Navbar from "./components/NavBar";

// function App() {
//     return (
//         <CartProvider>
//             <>
//                 <Navbar />
//                 <ItemListcontainer greeting="Hola Xboxer!" />
//                 <ItemList />
//             </>
//         </CartProvider>
//     );
// }

// export default App;

// // App.jsx

// import "./App.css";
// import { CartProvider } from "./components/CartContext";
// import ItemList from "./components/ItemList";
// import ItemListContainer from "./components/ItemListContainer";
// import Navbar from "./components/NavBar";

// function App() {
//     return (
//         <CartProvider>
//             <>
//                 <Navbar />
//                 <ItemListContainer greeting={"Hola Xboxer!"} />
//                 <ItemList />
//             </>
//         </CartProvider>
//     );
// }

// export default App;

// App.jsx

// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CartProvider } from "./components/CartContext";
// import ItemList from "./components/ItemList";
// import ItemListContainer from "./components/ItemListContainer";
// import Navbar from "./components/NavBar";
// import Cart from "./components/Cart";

// function App() {
//     return (
//         <CartProvider>
//             <Router>
//                 <>
//                     <Navbar />
//                     <ItemListContainer greeting={"Hola Xboxer!"} />
//                     <Routes>
//                         <Route path="/cart" element={<Cart />} />
//                     </Routes>
//                     <ItemList />
//                 </>
//             </Router>
//         </CartProvider>
//     );
// }

// export default App;


// App.jsx
import "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ItemListPage from "./components/ItemListPage";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
        <CartProvider>
            <Router>
                <>
                    <NavBar />                    
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path='/category/:id' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/ItemListPage" element={<ItemListPage />} />
                    </Routes>
                    </>
            </Router>
        </CartProvider>
    );
}

export default App;
