import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className="topbar h-[50px] w-full bg-white sticky t-0 z-[999]">
      <div className="topbarWrapper h-full py-0 px-5 flex items-center justify-between">
        <div className="topLeft">
          <span className="logo font-medium text-[30px]  text-blue-900 cursor-pointer ">
            Admin
          </span>
        </div>
        <div className="topRight flex items-center">
          <div className="topbarIconContainer relative cursor-pointer mr-2 text-gray-500">
            <NotificationsIcon />
            <span className="topIconBadge w-4 h-4 absolute t-[-5px] r-0 bg-red-500 text-white rounded-[50%] flex items-center justify-center text-sm">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer mr-2 text-gray-500">
            <LanguageIcon />
            <span className="topIconBadge w-4 h-4 absolute t-[-5px] r-0 bg-red-500 text-white rounded-[50%] flex items-center justify-center text-sm">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer mr-2 text-gray-500">
            <SettingsIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar w-10 h-10 rounded-[50%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
