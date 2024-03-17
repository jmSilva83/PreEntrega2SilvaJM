// ItemListPage.jsx
// import PropTypes from 'prop-types';
// import 'react';
// import ItemList from '../components/ItemList'; // Ajusta la ruta según tu estructura de archivos

// const ItemListPage = ({ greeting }) => {
//     return (
//         <>
//             <div className="text-center text-6xl font-mono text-green-400 pt-28">
//                 <span className="border-2 bg-zinc-800 bg-opacity-75 border-green-500 rounded-md p-2">
//                     {greeting}
//                 </span>
//             </div>
//             <ItemList />
//         </>
//     );
// };

// ItemListPage.propTypes = {
//     greeting: PropTypes.string.isRequired,
// };

// export default ItemListPage;


import ItemDetailContainer from "./ItemDetailContainer";


const ItemListPage = () => {
    return (
        <>
            <ItemDetailContainer />
        </>
    );
};



export default ItemListPage;
