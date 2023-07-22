import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';

import cartSlice from './cartSlice';
import userRegistrationSlice from './userRegistrationSlice';

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  userRegistration: userRegistrationSlice,
});

export default rootReducer;
