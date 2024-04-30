import React from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { ProductCard } from '../productCard/ProductCard';
import { useProductAPI } from '../../hooks/useProductAPI';
import './ProductList.scss';
import { CartItem } from '@/types/types'; // Importe o tipo CartItem aqui

interface ProductListProps {
  addToCart: (product: CartItem) => void; // Defina o tipo de addToCart como uma função que recebe um CartItem e não retorna nada
}

export const ProductList: React.FC<ProductListProps> = ({ addToCart }) => { // Defina ProductList como uma função componente que recebe ProductListProps
  const { isLoading, data } = useQuery('products', useProductAPI);

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      {isLoading && (
        <div className="product-list-items">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="product-list-item skeleton-item" />
          ))}
        </div>
      )}
      {!isLoading && (
        <motion.div
          className="product-list-items"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.isArray(data) && data.map((product) => (
            <motion.div
              key={product.id}
              className="product-list-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ProductCard product={product} addToCart={addToCart} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
