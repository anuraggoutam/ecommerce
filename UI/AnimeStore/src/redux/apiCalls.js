import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
} from './userRedux';
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
} from '../redux/registerReducer';
import { publicRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginUserRequest);
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginUserSuccess(res.data));
  } catch (err) {
    dispatch(loginUserFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerUserRequest());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerUserSuccess(res.data));
  } catch (err) {
    dispatch(registerUserFailure());
  }
};
