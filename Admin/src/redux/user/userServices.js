import { loginFailure, loginStart, loginSuccess, logout } from './userRedux';
import { publicRequest } from '../../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem('auth', JSON.stringify(res.data.accessToken));
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch(loginFailure(message));
  }
};
export const Logout = () => {
  localStorage.removeItem('user');
  logout();
};
