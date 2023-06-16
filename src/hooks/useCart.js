import { useDispatch } from 'react-redux';

import * as slice from '../redux/cart/cartSlice.js';

export function useCart() {
  const dispatch = useDispatch();

  const addProductToCart = (payload) => {
    dispatch(slice.addProduct(payload));
  };

  const removeProductFromCart = (payload) => {
    dispatch(slice.removeProductFromCart(payload));
  };

  const increaseProductQuantity = (payload) => {
    dispatch(slice.increaseProductQuantity(payload));
  };

  const decreaseProductQuantity = (payload) => {
    dispatch(slice.decreaseProductQuantity(payload));
  };

  return {
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  };
}
