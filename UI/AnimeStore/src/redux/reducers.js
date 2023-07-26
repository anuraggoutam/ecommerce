import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import authReducer from './user/userAuth';

const rootReducer = combineReducers({
  cart: cartSlice,
  auth: authReducer,
});

export default rootReducer;
