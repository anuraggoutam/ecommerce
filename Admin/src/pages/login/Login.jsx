import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/userServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/user/userRedux';
import Spinner from '../../components/spinner/Spinner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { User, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || User) {
      navigate('/');
    }

    dispatch(reset());
  }, [User, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    login(dispatch, userData);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="Container mt-[300px] flex items-center  reg-img bg-cover  justify-center ">
      <div className="wrapper  p-5 bg-white  smx:w-3/4 rounded-xl border-2 border-gray-500 h-auto gap-5">
        <h1 className="text-2xl font-light">SIGN IN</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
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
            type="submit"
            className="w-2/5 border-none py-[15px] px-5 bg-blue-500 text-white cursor-pointer mb-2"
          >
            LOGIN
          </button>

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
