/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
      },
      textColor: {
        cream: 'rgb(187, 186, 186)',
      },
    },
  },
  plugins: [],
};
