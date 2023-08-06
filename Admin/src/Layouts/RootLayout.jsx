import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <div className="Container flex mt-3 ">
        <Sidebar />
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
};

export default RootLayout;
