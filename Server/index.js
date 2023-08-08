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

const date = new Date();

app.listen(process.env.PORT || 4000, () => {
  console.log('Backend server is running!');
  console.log(date.toString());
});
