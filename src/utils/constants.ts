import { Product } from "@/types/types";

interface ApiResponse {
  products: Product[];
  count: number;
}

export const fetchProducts = async (
  page: number = 1,
  rows: number = 10,
  sortBy: string = 'id',
  orderBy: string = 'ASC'
): Promise<Product[]> => {
  try {
    const url = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data: ApiResponse = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
