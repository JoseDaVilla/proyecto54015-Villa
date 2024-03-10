import React, { useState } from "react";
import "./Contador.css";
import { useCart } from "./CartWidget/CartContext";

export default function Contador({ stock, onAddToCart, productId, }) {
    const { itemExists, addItem, removeItem } = useCart();
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount < stock ? prevCount + 1 : prevCount));
    };

    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

    const handleAddToCart = () => {
        onAddToCart(count);
        setCount(0); 
    };

    const handleRemoveFromCart = () => {
        console.log("itemExists:", itemExists(productId));
        console.log("productId:", productId);

        if (itemExists(productId)) {
            removeItem(productId);
            setCount(0);
        }
    };

    return (
        <div className="contador">
            <div>
                <button onClick={handleDecrement} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement} disabled={count === stock}>+</button>
            </div>

            <div>
                {count > 0 && (
                    <button className="add" onClick={handleAddToCart}>
                        Agregar al Carrito
                    </button>
                )}

                {itemExists(productId) && (
                    <button className="remove" onClick={handleRemoveFromCart}>
                        Eliminar del Carrito
                    </button>
                )}
            </div>
        </div>
    );
}
