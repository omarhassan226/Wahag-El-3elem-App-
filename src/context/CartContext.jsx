import React, { createContext, useReducer, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false)
    const [cart, setCart] = useState([{
        id: "1",
        name: 'Omar',
        price: '250',
        quantity: 1,
        description: 'مدرس لغة عربيه'
    }]);

    const addItem = (item) => {
        setClicked(!clicked)
        setCart((prevCart) => [...prevCart, item]);
        console.log(cart.length);
    };

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateItem = (updatedItem) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, updateItem, clearCart, clicked }}
        >
            {children}
        </CartContext.Provider>
    );
};


