import Home from '../src/pages/home/Home';
import UserList from '../src/pages/userList/UserList';
import User from '../src/pages/user/User';
import NewUser from '../src/pages/newUser/NewUser';
import Product from '../src/pages/product/Product';
import ProductList from '../src/pages/productList/ProductList';
import NewProduct from '../src/pages/newProduct/NewProduct';
import Topbar from '../src/pages/topbar/Topbar';
import Sidebar from '../src/pages/sidebar/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/users',
    element: <UserList />,
  },
  {
    path: '/user/:userid',
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
    path: '/products/:productid',
    element: <Product />,
  },
  {
    path: '/newProduct',
    element: <NewProduct />,
  },
]);

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
