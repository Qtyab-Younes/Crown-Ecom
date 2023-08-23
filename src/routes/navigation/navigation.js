import { Fragment,useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import './navigation-style';
import { UserContext } from '../../contexts/user';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/Card-Icon';
import CartDropdown from '../../components/Cart-dropdown';
import { CartContext } from '../../contexts/cart';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation-style';

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCarteOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCarteOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;