import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productAlreadyAddedInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productAlreadyAddedInCart) {
        state.products.map((product) => {
          if (product.id === action.payload.id) {
            product.quantity = product.quantity + 1;
          }

          return product;
        });

        return;
      }

      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    },

    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          product.quantity++;
        }

        return product;
      });
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload && product.quantity > 1) {
          product.quantity--;
        }

        return product;
      });
    },
  },
});

export const {
  addProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
