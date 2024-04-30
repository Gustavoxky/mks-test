// hooks/useShoppingCart.ts

import { useState } from 'react';
import { CartItem } from '../types/types';

export const useShoppingCart = () => {
  const [cartItems, setCartItems] = useState([] as CartItem[]);;

  const increaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const addItemToCart = (product: CartItem) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      increaseQuantity(product.id);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return { cartItems, increaseQuantity, decreaseQuantity, removeItem, addItemToCart };
};
