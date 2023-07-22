import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../redux/apiCalls';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      throw new Error('Password do not match');
    }
    register(dispatch, { username, password, email, name, lastname });
    navigate('login');
  };

  return (
    <div className="Container w-screen h-screen reg-img bg-cover flex items-center justify-center">
      <div className="wrapper w-2/5 p-5 bg-white  smx:w-3/4">
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-col" action="">
          <input
            type="text"
            placeholder="name"
            className="flex-1 min-w-[40%] mt-5 mr-[10px] mb-0 ml-0 p-[10px]"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            className="flex-1 min-w-[40%] mt-5 mr-[10px] mb-0 ml-0 p-[10px]"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            placeholder="username"
            className="flex-1 min-w-[40%] mt-5 mr-[10px] mb-0 ml-0 p-[10px]"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            className="flex-1 min-w-[40%] mt-5 mr-[10px] mb-0 ml-0 p-[10px]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="flex-1 min-w-[40%] mt-5 mr-[10px] mb-0 ml-0 p-[10px]"
            onChange={(e) => setPassword(e.target.value)}
            spellCheck
          />
          <input
            type="password"
            placeholder="confirm password"
            className="flex-1 min-w-[40%] mt-5 mr-[10px] mb-0 ml-0 p-[10px]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="text-xs my-5 mx-0">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button
            className="w-2/5 border-none py-[15px] px-5 bg-teal-500 text-white cursor-pointer mb-2"
            onClick={handleClick}
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
