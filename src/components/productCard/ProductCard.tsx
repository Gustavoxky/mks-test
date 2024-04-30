import React from 'react';
import Image from 'next/image';
import { CartItem, Product } from '../../types/types';
import { FiShoppingBag } from 'react-icons/fi';
import './ProductCard.scss';

interface Props {
  product: Product;
  addToCart: (product: CartItem) => void;
}

export const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product, 
      quantity: 1 
    };
    addToCart(cartItem);
  };

  const formattedPrice = Number(product.price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  })

  return (
    <div className="product-card">
      <div className="product-image">
        <Image 
          src={product.photo}  
          alt={product.name} 
          width={120} 
          height={120} 
          priority={true} 
        />
      </div>
      <span className='name-price'>
        <span className='product-card-name'><p>{product.name}</p></span>
        <span className='product-price-name'><p>{formattedPrice}</p></span>        
      </span>
      <p>{product.description}</p>
      <button onClick={handleAddToCart} className="buy-button">
        <FiShoppingBag className="icon" />
        <p>COMPRAR</p>
      </button> 
    </div>
  );
};
