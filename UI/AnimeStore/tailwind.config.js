/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      screens: {
        smx: { max: '639px' },
        mx: { min: '639px' },
        tablet: { max: '1076px' },
        mid: { min: '1076px' },
      },
    },
  },
  plugins: [],
};
