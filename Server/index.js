const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
const connectDB = require('./config/DB');
const { errorHandler } = require('./middleware/errorMiddleware');
// const Product = require('./models/Product');
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);
app.use(errorHandler);

// const pro = [
//   {
//     title: 'Apple Airpods1',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods2',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods3',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods4',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods5',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods6',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods7',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
//   {
//     title: 'Apple Airpods8',
//     desc: 'Ecma Airpods',
//     img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     categores: ['iOS', 'Android'],
//     size: [25, 56],
//     color: ['red', 'green', 'blue'],
//     price: 120,
//     inStock: true,
//   },
// ];

// const mongodb = async () => {
//   try {
//     const product = await Product.insertMany([
//       {
//         title: 'Apple Airpods1',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods2',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods3',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods4',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods5',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods6',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods7',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//       {
//         title: 'Apple Airpods8',
//         desc: 'Ecma Airpods',
//         img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//         categores: ['iOS', 'Android'],
//         size: [25, 56],
//         color: ['red', 'green', 'blue'],
//         price: 120,
//         inStock: true,
//       },
//     ]);
//     console.log(product);
//   } catch (error) {
//     console.log(error);
//   }
// };

// mongodb();
const date = new Date();

app.listen(process.env.PORT || 4000, () => {
  console.log('Backend server is running!');
  console.log(date.toString());
});
