import { useDispatch } from 'react-redux';
import cartActionTypes from '../redux/cart/actionTypes.js';

export function useCart() {
  const dispatch = useDispatch();

  const addProductToCart = (payload) => {
    dispatch({
      type: cartActionTypes.ADD_PRODUCT,
      payload,
    });
  };

  const removeProductFromCart = (payload) => {
    dispatch({
      type: cartActionTypes.REMOVE_PRODUCT,
      payload,
    });
  };

  const increaseProductQuantity = (payload) => {
    dispatch({
      type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
      payload,
    });
  };

  const decreaseProductQuantity = (payload) => {
    dispatch({
      type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
      payload,
    });
  };

  return {
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  };
}
