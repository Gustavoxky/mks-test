import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './ShoppingCart.scss';
import { CartItem } from '@/types/types'; 

interface Props {
  onClose?: () => void;
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
}

export const ShoppingCart: React.FC<Props> = ({ onClose, cartItems, removeFromCart }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(() => {
    const storedQuantities = localStorage.getItem('cartQuantities');
    return storedQuantities ? JSON.parse(storedQuantities) : {};
  });

  useEffect(() => {
    localStorage.setItem('cartQuantities', JSON.stringify(quantities));
  }, [quantities]);

  const handleIncreaseQuantity = (productId: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1 
    }));
  };
  
  const handleDecreaseQuantity = (productId: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1)
    }));
  };
  
  const getProductQuantity = (productId: number) => {
    return quantities[productId] || 1;
  };

  const totalPrice = cartItems.reduce((acc, cartItem) => {
    const quantity = getProductQuantity(cartItem.id);
    return acc + parseFloat(cartItem.price) * quantity;
  }, 0);

  return (
    <motion.div className="shopping-cart-container"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <motion.div className="shopping-cart"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          {onClose && <button className="close-btn" onClick={onClose}>X</button>}
        </div>
        {cartItems.length === 0 ? (
          <span className='cart-empty'>
             <h3>O carrinho está vazio.</h3>
          </span>    
        ) : (
          <>
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="product-item">
                <div className="product-image">
                  <Image src={cartItem.photo} alt={cartItem.name} width={80} height={80} />
                </div>
                <p>{cartItem.name}</p>
                <div className='container-counter'>
                  <button onClick={() => handleDecreaseQuantity(cartItem.id)}>-</button>
                  <p>{getProductQuantity(cartItem.id)}</p>
                  <button onClick={() => handleIncreaseQuantity(cartItem.id)}>+</button>
                </div>
                <p className="product-price">R${Number(cartItem.price).toFixed(0)}</p>
                <button className='button-remove' onClick={() => removeFromCart(cartItem.id)}>X</button>
              </div>
            ))}
          </>
        )}
      </motion.div>
      <div className="total-price">
        <p>Total:</p>
        <p>R${totalPrice.toFixed(0)}</p>
      </div>
      <motion.div className='btn'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>Finalizar Compra</p>
      </motion.div>
    </motion.div>
  );
};
