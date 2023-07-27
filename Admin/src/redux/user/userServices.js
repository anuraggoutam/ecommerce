import axios from 'axios';

const login = async (userData) => {
  const response = await axios.post(
    'http://localhost:5000/api/auth/login',
    userData
  );

  return response.data;
};
const logout = () => {
  localStorage.removeItem('persist:root');
};

const authService = {
  login,
  logout,
};

export default authService;
