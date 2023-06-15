import { useMemo, useState } from 'react';

// Components
import Cart from '../cart/index';

// Styles
import * as Styles from './styles';
import { useSelector } from 'react-redux';
import { useUser } from '../../hooks/useUser.js';
import { selectorProductsCount } from '../../redux/cart/selectors.js';

function Header() {
  const { currentUser } = useSelector((root) => root.userReducer);
  const { login, logout } = useUser();

  const [cartIsVisible, setCartIsVisible] = useState(false);
  const productsCount = useSelector(selectorProductsCount);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    login({ name: 'Jean', email: 'jean@gmail.com' });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <>
            <div onClick={handleLogout}>Sair</div>
          </>
        ) : (
          <>
            <div onClick={handleLogin}>Login</div>
          </>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
