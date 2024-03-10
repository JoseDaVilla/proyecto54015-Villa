import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}


export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (itemToAdd) => {
        setItems((prevItems) => {
            const foundIndex = prevItems.findIndex(item => item.id === itemToAdd.id);
            if (foundIndex !== -1) {
                
                const newItems = [...prevItems];
                newItems[foundIndex].quantity += itemToAdd.quantity;
                return newItems;
            } else {
                
                return [...prevItems, itemToAdd];
            }
        });
    };
    
    const itemExists = (itemId) => {
        return items.some(item => item.id === itemId);
    };

    const removeItem = (itemId) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };
    

    const clearCart = () => {
        setItems([]);
    };

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const value = {
        items,
        addItem,
        removeItem,
        clearCart,
        itemCount,
        itemExists
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;