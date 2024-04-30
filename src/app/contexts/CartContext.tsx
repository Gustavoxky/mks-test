// // CartContext.js

// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((item) => item.id !== productId)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
