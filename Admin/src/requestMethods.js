import axios from 'axios';

export const BASE_URL = 'http://localhost:4000/api/';
const user = JSON.parse(localStorage.getItem('auth'));

export const TOKEN = user;
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const config = {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
};

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});
