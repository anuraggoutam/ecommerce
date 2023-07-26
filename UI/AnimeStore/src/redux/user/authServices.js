import axios from 'axios';

// Register user
const register = async (userData) => {
  const response = await axios.post(
    'http://localhost:5000/api/auth/register',
    userData
  );

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    'http://localhost:5000/api/auth/login',
    userData
  );

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('persist:root');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
