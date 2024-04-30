import React from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { ProductCard } from '../productCard/ProductCard';
import { useProductAPI } from '../../hooks/useProductAPI';
import './ProductList.scss';
import { CartItem } from '@/types/types';
import Empty from "../empty";

interface ProductListProps {
  addToCart: (product: CartItem) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const { isLoading, data } = useQuery('products', useProductAPI);

  if (isLoading) {
    return (
      <div className="product-list-container">
        <h2 className="product-list-title">Products</h2>
        <div className="product-list-items" data-testid="skeleton-items">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="product-list-item skeleton-item" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      {data && data.length > 0 ? (
        <motion.div
          className="product-list-items"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((product) => (
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
      ) : (
        <Empty message="No products available" />
      )}
    </div>
  );
};
