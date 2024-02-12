import React, { useState } from "react";
import "./Contador.css";



function Contador({ stock }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => (prevCount < stock ? prevCount + 1 : prevCount));
    };

    const decrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    };

    

    return (
        <div className="contador">
            <button onClick={increment} disabled={count === stock}>+</button>
            <span>{count}</span>
            
            <button onClick={decrement} disabled={count === 0}>-</button>
        </div>
    );
}

export default Contador;
