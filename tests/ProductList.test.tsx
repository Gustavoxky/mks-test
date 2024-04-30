import React from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import '@testing-library/jest-dom/extend-expect';
import { ProductList } from '@/components/productList/ProductList';

describe('ProductList component', () => {
    test('renders products correctly', async () => {
        const mockProducts = [
          { id: 1, name: 'Product 1', price: '10', description: 'Description 1', photo: '/product1.jpg' },
          { id: 2, name: 'Product 2', price: '20', description: 'Description 2', photo: '/product2.jpg' },
        ];
  
        const queryClient = new QueryClient();
        queryClient.setQueryData('products', mockProducts);
  
        const { findByText } = render(
          <QueryClientProvider client={queryClient}>
            <ProductList addToCart={() => {}} />
          </QueryClientProvider>
        );
  
        const productName1 = await findByText('Product 1');
        const productName2 = await findByText('Product 2');
  
        expect(productName1).toBeInTheDocument();
        expect(productName2).toBeInTheDocument();
    });
    test('renders skeleton loading while fetching data', async () => {
        const { getByTestId } = render(
          <QueryClientProvider client={new QueryClient()}>
            <ProductList addToCart={() => {}} />
          </QueryClientProvider>
        );
    
        const skeletonItems = getByTestId('skeleton-items');
    
        expect(skeletonItems).toBeInTheDocument();
      });
    
      test('renders no products message when products array is empty', async () => {
        const queryClient = new QueryClient();
        queryClient.setQueryData('products', []);
    
        const { findByText } = render(
          <QueryClientProvider client={queryClient}>
            <ProductList addToCart={() => {}} />
          </QueryClientProvider>
        );
    
        const noProductsMessage = await findByText('No products available');
    
        expect(noProductsMessage).toBeInTheDocument();
      });
    });