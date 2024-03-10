import React from 'react';
import { useCart } from './CartContext';
import "./Cart.css"
import { Link } from 'react-router-dom';

function Cart() {
    const { items, itemCount, removeItem } = useCart();


    const totalPrice = items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <div className='cart'>
            <h2>Tu Carrito</h2>
            {items.map(item => (
                <div className='cart-items' key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={`/public/${item.img}`} alt={item.name} />
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: {item.price} COP</p>
                    <p>Total: {item.price * item.quantity} COP</p>
                    <button className="remove" onClick={() => removeItem(item.id)}>
                        Eliminar del Carrito
                    </button>
                </div>
            ))}
            {itemCount > 0 && (
                <Link to="/checkout">
                    <button>Checkout</button>
                </Link>
            )}
            <p>Total items: {itemCount}</p>
            {itemCount > 0 && (
                <p>Total a Pagar: {totalPrice} COP</p>
            )}
        </div>
    );
}

export default Cart;
