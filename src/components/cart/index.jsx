// Styles
import { useSelector } from 'react-redux';
import * as Styles from './styles';
import CartItem from '../cart-item/index.jsx';

import { selectorProductsTotalPrice } from '../../redux/cart/selectors.js';

const Cart = ({ isVisible, setIsVisible }) => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const totalPrice = useSelector(selectorProductsTotalPrice);

  const handleEscapeAreaClick = () => setIsVisible(false);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => {
          return <CartItem key={product.id} product={product} />;
        })}

        <Styles.CartTotal>Total R$ {totalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
