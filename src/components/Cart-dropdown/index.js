import './index-style';
import Button from '../Button/index';
import CartItem from '../Cart-item/index';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './index-style';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;