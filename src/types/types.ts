// types/types.ts
import '@testing-library/jest-dom';

export interface Product {
    id: number;
    name: string;
    brand?: string;
    description?: string;
    photo: string;
    createdAt?: string;
    updatedAt?: string;
    price: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  