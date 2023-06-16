import { combineReducers } from 'redux';

import userReducer from './user/userSlice.js';
import cartReducer from './cart/cartSlice.js';

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default rootReducer;
