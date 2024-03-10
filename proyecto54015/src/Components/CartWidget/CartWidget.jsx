import "./CartWidget.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function CartWidget() {
    const { itemCount } = useCart();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(itemCount);
    }, [itemCount]);

    return (
        <Link to="/cart" className="CartWidget">
            <i className="bi bi-cart3"></i>
            {cartCount > 0 && <span>{cartCount}</span>}
        </Link>
    );
}

export default CartWidget;
