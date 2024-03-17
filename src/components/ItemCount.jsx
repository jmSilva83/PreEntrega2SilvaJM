import { useState } from "react";
import PropTypes from "prop-types";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";

const ItemCount = ({ onAddToCart }) => {
    const [value, setValue] = useState(0);
    const stock = 10;

    const onAdd = (operator) => {
        if (
            (operator === "+" && value < stock) ||
            (operator === "-" && value > 0)
        ) {
            const newValue = operator === "+" ? value + 1 : value - 1;
            setValue(newValue);
        }
    };

    const handleAddToCart = () => {
        onAddToCart(value);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-3 ml- rounded focus:outline-none focus:shadow-outline"
                onClick={() => onAdd("-")}
                disabled={value === 0}
            >
                <FaMinus />
            </button>
            <div className="text-white p-1">{value}</div>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2.5 px-3 rounded focus:outline-none focus:shadow-outline"
                onClick={() => onAdd("+")}
                disabled={value === stock}
            >
                <IoAdd />
            </button>
            <button
                className="bg-green-500 hover:bg-green-700 text-white ml-4 rounded focus:outline-none focus:shadow-outline text-lg"
                disabled={value === 0}
                onClick={handleAddToCart}
            >
                <LiaCartPlusSolid className="text-4xl" />
            </button>
        </div>
    );
};

ItemCount.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default ItemCount;
