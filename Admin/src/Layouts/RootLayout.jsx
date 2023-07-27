import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <div className="Container flex mt-3 ">
        <Sidebar />

        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;