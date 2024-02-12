import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'
import productos from '../../../productos.json'; 
import Contador from '../Contador'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    
    const productId = parseInt(id);
    const foundProduct = productos.find(product => product.id === productId);
    
    if (foundProduct) {
        setProduct(foundProduct);
    } else {
        console.error('Producto no encontrado');
    }
    setIsLoading(false); 
    }, [id]);

    if (isLoading) {
        return <div>Cargando detalles del producto...</div>; // Mostrar esto mientras isLoading sea true
    }


    return (
    <div className='ItemDetailContainer'>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Piezas disponibles: {product.stock}</p>
        <p>Precio: {product.price} COP</p>
        <Contador stock={product.stock}/>
        <button>AGREGAR</button>
    </div>
    );
}
