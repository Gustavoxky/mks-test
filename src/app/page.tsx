'use client'

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ProductList } from '../components/productList/ProductList';
import ButtonCart from '../components/buttonCart';
import { ShoppingCart } from '../components/shoppingCart/ShoppingCart';
import { CartItem } from '@/types/types';

const queryClient = new QueryClient();

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const addToCart = (product: CartItem) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };
  
  const removeFromCart = (productId: number) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
  };
  

  const cartItemsCount = cartItems.length;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header>
          {isCartOpen && (
            <ShoppingCart removeFromCart={removeFromCart} cartItems={cartItems} onClose={handleCloseCart} />
          )}
          {!isCartOpen && (
            <ButtonCart onClick={handleOpenCart} cartItemsCount={cartItemsCount} />
          )}
        </Header>
        <main>
          <ProductList addToCart={addToCart} />
        </main>
        <Footer copyrightText="MKS Sistemas © Todos os direitos reservados"/>
      </QueryClientProvider>    
    </>
  );
}
