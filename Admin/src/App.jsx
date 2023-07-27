import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import NewProduct from './pages/newProduct/NewProduct';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route paths="users" element={<UserList />} />
      <Route paths="user/:userid" element={<User />} />
      <Route paths="newUser" element={<NewUser />} />
      <Route paths="products" element={<ProductList />} />
      <Route paths="products/:productid" element={<Product />} />
      <Route paths="newProduct" element={<NewProduct />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
