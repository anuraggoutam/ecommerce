import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';

function App() {
  const home = {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <UserList />,
      },
      {
        path: '/user/userid',
        element: <User />,
      },
      {
        path: '/newUser',
        element: <NewUser />,
      },
      {
        path: '/products',
        element: <ProductList />,
      },
      {
        path: '/products/:productsId',
        element: <Product />,
      },
      {
        path: '/newProduct',
        element: <NewProduct />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  };

  const router = createBrowserRouter([home]);

  return <RouterProvider router={router} />;
}

export default App;
