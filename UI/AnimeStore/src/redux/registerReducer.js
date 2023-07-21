// src/store/userRegistrationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {
    registerUserRequest(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    registerUserSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    registerUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetRegistrationState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  resetRegistrationState,
} = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
