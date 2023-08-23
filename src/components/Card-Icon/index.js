import { useContext } from "react";
import './index-style.js';
import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg';
import { CartContext } from '../../contexts/cart';
import { CartIconContainer, ItemCount } from './index-style';


const CartIcon = () => {
    const { isCarteOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCarteOpen);
  
    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
  };

export default CartIcon;