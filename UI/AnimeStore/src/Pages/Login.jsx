import Error from './Error';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
} from '../redux/userSlice';
import { publicRequest } from '../requestMethods';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectInUrl = new URLSearchParams(location.search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginUserRequest);
    try {
      const res = await publicRequest.post('/auth/login', {
        username,
        password,
      });
      dispatch(loginUserSuccess(res.data));
      localStorage.setItem('user', res.data);
      navigate(redirect || '/');
      console.log(res.data);
    } catch (error) {
      dispatch(loginUserFailure());
    }
  };
  return (
    <div className="Container w-screen h-screen reg-img bg-cover flex items-center justify-center">
      <div className="wrapper w-2/5 p-5 bg-white  smx:w-3/4">
        <h1 className="text-2xl font-light">SIGN IN</h1>
        <form className="flex flex-col" action="">
          <input
            type="text"
            placeholder="username"
            className="flex-1 min-w-[40%]  my-5 mx-0 p-[10px]"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="flex-1 min-w-[40%] my-5 mx-0 p-[10px]"
            onChange={(e) => setPassword(e.target.value)}
            spellCheck
          />
          <button
            className="w-2/5 border-none py-[15px] px-5 bg-teal-500 text-white cursor-pointer mb-2"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>

          {error && <Error>Something went wrong...</Error>}
          <a href="" className="my-2 mx-0 font-xs  no-underline cursor-pointer">
            DO NOT YOU REMEMBER THE PASSWORD
          </a>
          <a href="" className="my-2 mx-0 font-xs  no-underline cursor-pointer">
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
