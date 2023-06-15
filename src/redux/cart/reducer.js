import cartActionTypes from './actionTypes.js';

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartReducer = function (state = initialState, action) {
  if (action.type === cartActionTypes.ADD_PRODUCT) {
    const productAlreadyAddedInCart = state.products.some(
      (product) => product.id === action.payload.id
    );

    if (productAlreadyAddedInCart) {
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity + 1;
        }

        return product;
      });

      return { ...state, products };
    }

    return {
      ...state,
      products: [...state.products, { ...action.payload, quantity: 1 }],
    };
  }

  if (action.type === cartActionTypes.REMOVE_PRODUCT) {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    };
  }

  if (action.type === cartActionTypes.INCREASE_PRODUCT_QUANTITY) {
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === action.payload) {
          product.quantity++;
        }

        return product;
      }),
    };
  }

  if (action.type === cartActionTypes.DECREASE_PRODUCT_QUANTITY) {
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === action.payload && product.quantity > 1) {
          product.quantity--;
        }

        return product;
      }),
    };
  }

  return state;
};

export default cartReducer;
