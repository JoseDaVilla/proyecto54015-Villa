import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { useCart } from '../CartWidget/CartContext'; 
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const { addItem } = useCart();


    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        const productsRef = collection(db, "productos");
        
        const q = query(productsRef, where("id", "==", parseInt(id)));

        const getProduct = async () => {
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                
                const docData = querySnapshot.docs[0].data();
                setProduct({ id: querySnapshot.docs[0].id, ...docData });
            } else {
                console.error('Producto no encontrado');
            }
            setIsLoading(false);
        };

        getProduct();
    }, [id]);
    
    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
        </div>
    );
}