import React from 'react'
import './ItemListContainer.css'
import productosJson from"../../../productos.json";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList';

function asyncMock(categoryId){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (categoryId === undefined) {
                resolve(productosJson);
            } 
            else {
                const productosFiltrados = productosJson.filter((item) => {
                    return item.category === categoryId
                })
                resolve(productosFiltrados)
            }
            reject("error")
        }, 500);

    });

    
}

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Estado de carga aquí

    useEffect(() => {
        setIsLoading(true); // Comenzar carga
        asyncMock(categoryId)
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false); // Finalizar carga
            });
    }, [categoryId]);

    if (isLoading) {
        return  <div className='loading-container'><div className='loading'></div></div>
    }

    return <ItemList productos={productos} />;
}

