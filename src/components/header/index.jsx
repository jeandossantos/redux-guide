import { useState } from 'react';

// Components
import Cart from '../cart/index';

// Styles
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import userActionTypes from '../../redux/user/actionTypes.js';

function Header() {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    dispatch({
      type: userActionTypes.LOGIN,
      payload: { name: 'Jean', email: 'jean@gmail.com' },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: userActionTypes.LOGOUT,
    });
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
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
