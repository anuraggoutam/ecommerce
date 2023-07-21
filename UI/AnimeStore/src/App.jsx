import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Success from './Pages/Success';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

const user = false;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/products/:category',
    element: <ProductList />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/success',
    element: <Success />,
  },
  {
    path: '/login',
    element: user ? <Navigate to="/" /> : <Login />,
  },
  {
    path: '/register',
    element: user ? <Navigate to="/" /> : <Register />,
  },
]);

//loader
//loader is use to load data before randering use useloaderdata

//action
// action use to mution things

//usefetcher
function App() {
  return <RouterProvider router={router} />;
}

export default App;
