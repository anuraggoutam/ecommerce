import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
} = userSlice.actions;


export default userSlice.reducer;
