import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from '@/components/productCard/ProductCard';
import '@testing-library/jest-dom/extend-expect';

describe('ProductCard component', () => {
    // Mocking the addToCart function
    const addToCartMock = jest.fn();
  
    const sampleProduct = {
      id: 1,
      name: 'Sample Product',
      price: '10', // Fixing the type to string
      description: 'Sample description',
      photo: '/sample.jpg',
    };
  
    test('renders product details correctly', () => {
      const { getByText, getByAltText } = render(<ProductCard product={sampleProduct} addToCart={addToCartMock} />);
      
      // Check if product name, price, and description are rendered correctly
      expect(getByText('Sample Product')).toBeInTheDocument();
      expect(getByText('R$10')).toBeInTheDocument();
      expect(getByText('Sample description')).toBeInTheDocument();
  
      // Check if product image is rendered correctly
      expect(getByAltText('Sample Product')).toBeInTheDocument();
    });
  
    test('calls addToCart function when buy button is clicked', () => {
      const { getByText } = render(<ProductCard product={sampleProduct} addToCart={addToCartMock} />);
      const buyButton = getByText('COMPRAR');
      
      fireEvent.click(buyButton);
  
      // Check if addToCart function is called with the correct arguments
      expect(addToCartMock).toHaveBeenCalledWith({
        ...sampleProduct,
        quantity: 1
      });
    });
  });