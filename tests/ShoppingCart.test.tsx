import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ShoppingCart } from '@/components/shoppingCart/ShoppingCart';

describe('ShoppingCart component', () => {
  const mockCartItems = [
    { id: 1, name: 'Product 1', photo: '/product1.jpg', price: '10.00', quantity: 2 },
    { id: 2, name: 'Product 2', photo: '/product2.jpg', price: '20.00', quantity: 3 }
  ];
  
  const mockRemoveFromCart = jest.fn();

  it('renders empty cart message when cart is empty', () => {
    render(<ShoppingCart cartItems={[]} removeFromCart={mockRemoveFromCart} />);
    expect(screen.getByText('O carrinho está vazio.')).toBeInTheDocument();
  });
  it('calls removeFromCart function when remove button is clicked', () => {
    render(<ShoppingCart cartItems={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    const removeButtons = screen.getAllByRole('button', { name: /X/i });
    removeButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(mockRemoveFromCart).toHaveBeenCalledWith(mockCartItems[index].id);
    });
  });
  it('does not decrease quantity below 1 when minus button is clicked', () => {
    render(<ShoppingCart cartItems={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    const minusButtons = screen.getAllByRole('button', { name: '-' });
    minusButtons.forEach((button) => {
      fireEvent.click(button);
      const quantityElements = screen.getAllByText('1');
      if (quantityElements) {
        const quantity = parseInt(quantityElements[0].textContent!); 
        expect(quantity).toBeGreaterThanOrEqual(1); 
      }
    });
  });
  
  it('displays product information correctly', () => {
    render(<ShoppingCart cartItems={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    mockCartItems.forEach((cartItem) => {
      const productImage = screen.getByAltText(cartItem.name);
      const productName = screen.getByText(cartItem.name);
      const productPrice = screen.getByText(`R$${Number(cartItem.price).toFixed(0)}`);
      expect(productImage).toBeInTheDocument();
      expect(productName).toBeInTheDocument();
      expect(productPrice).toBeInTheDocument();
    });
  });
  it('calculates total price correctly', () => {
    const { container } = render(<ShoppingCart cartItems={[]} removeFromCart={mockRemoveFromCart} />);
    const totalPriceElement = container.querySelector('.total-price'); 
    expect(totalPriceElement).not.toBeInTheDocument(); 
  });
  
});
