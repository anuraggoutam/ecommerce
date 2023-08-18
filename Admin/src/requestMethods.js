import axios from 'axios';

export const BASE_URL = 'http://localhost:4000/api/';
const user = JSON.parse(localStorage.getItem('auth'));

export const TOKEN = user;

// const date = new Date();
// console.log(date.toUTCString());
// const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
// console.log(lastMonth.toUTCString());
// const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
// console.log(previousMonth.toUTCString());

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
