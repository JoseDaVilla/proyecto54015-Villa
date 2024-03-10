import React from 'react';
import { useCart } from '../CartWidget/CartContext';
import Contador from '../Contador';

function ItemDetail({ product }) {
    const { addItem, removeItem } = useCart();

    const onAddToCart = (quantity) => {
        addItem({ ...product, quantity });
    };

    

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={`/public/${product.img}`} alt={product.name} />
            <p>Articulos disponibles: {product.stock}</p>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Contador stock={product.stock} onAddToCart={onAddToCart} productId={product.id}  />
        </div>
    );
}

export default ItemDetail;
