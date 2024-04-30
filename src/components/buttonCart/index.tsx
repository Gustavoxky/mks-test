import React from 'react';
import './ButtonCart.scss';
import { FaCartShopping } from "react-icons/fa6";


interface Props {
  onClick: () => void;
  cartItemsCount: number;
}

const ButtonCart: React.FC<Props> = ({ onClick, cartItemsCount }) => {

  return (
    <div className="button_cart" onClick={onClick}>
      <FaCartShopping className='cart-icon' />
      <p>{cartItemsCount}</p>
    </div>
  );
};

export default ButtonCart;
