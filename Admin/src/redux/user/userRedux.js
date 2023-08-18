import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  User: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.User = action.payload;
      state.isSuccess = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    logout: (state) => {
      state.User = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, reset } =
  userSlice.actions;
export default userSlice.reducer;
