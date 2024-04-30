import { useQuery } from 'react-query';
import { Product } from '../types/types';
import { fetchProducts } from '../utils/constants';

export const useProductAPI = async (): Promise<Product[]> => {
  return fetchProducts();
};

export const useProductQuery = () => {
  return useQuery('products', useProductAPI);
};
