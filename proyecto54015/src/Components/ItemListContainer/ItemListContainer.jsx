import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList';
import { getFirestore, query, collection, getDocs, where } from "firebase/firestore";

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        const productosRef = collection(db, "productos");

        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef;

        getDocs(q).then((snapshot) => {
            const productos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductos(productos);
            setIsLoading(false);
        }).catch(error => {
            console.error("Error fetching productos:", error);
            setError("Error al cargar los productos.");
            setIsLoading(false);
        });
    }, [categoryId]); 

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isLoading) {
        return <div>Cargando productos...</div>;
    }

    return <ItemList productos={productos} />;
}
