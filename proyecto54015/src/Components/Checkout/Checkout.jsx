import React, { useState } from 'react';
import { useCart } from '../CartWidget/CartContext';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import './Checkout.css';


const Checkout = () => {
    const { items, clearCart } = useCart();
    const [formData, setFormData] = useState({
                
        
        name: '',
        email: '',
        phone: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const db = getFirestore();
            const productsRef = collection(db, "productos");
            const cartItems = items.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                price: item.price,
            }));
    
            const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
            

            const docRef = await addDoc(collection(db, 'ordenes'), {
                buyer: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                },
                items: cartItems, 
                date: new Date(),
                total: cartTotal, 
            });
    
            console.log('Orden creada con ID: ', docRef.id);
            alert('Orden creada con ID: '+ docRef.id);
            navigate('/');
            window.location.reload();
            
        } catch (error) {
            console.error('Error al crear la orden: ', error);
        }
    };

    return (
        <div className='checkout'>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Correo Electrónico:
                        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label htmlFor='phone'>Número de teléfono:</label>
                    <input type='text' id='phone' name='phone' value={formData.phone} onChange={handleChange} required />
                </div>

                <button type='submit'>Realizar Pedido</button>
            </form>
        </div>
    );
};

export default Checkout;
