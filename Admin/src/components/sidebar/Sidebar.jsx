import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar  flex-[1] h-[calc(100vh-50px)] bg-[rgb(251,251,255)] sticky top-[50px] ">
      <div className="sidebarWrapper bg-gray-100  ">
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-xs text-cream ml-2 ">Dashboard</h3>
          <ul className="sidebarList list-none p-1">
            <Link to="/" className="link">
              <li className="sidebarListItem active p-1 cursor-pointer flex items-center rounded-xl hover:bg-[rgb(240,240,255)]">
                {/* if active then hover */}
                <LineStyleIcon className="sidebarIcon mr-1 text-xl" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon mr-1 text-xl" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon mr-1 text-xl" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-xs text-cream ml-2">Quick Menu</h3>
          <ul className="sidebarList list-none p-1">
            <Link to="/users" className="link">
              <li className="sidebarListItem  p-1 cursor-pointer flex items-center rounded-xl ">
                <PermIdentityIcon className="sidebarIcon mr-1 text-xl" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem p-1 cursor-pointer flex items-center rounded-xl ">
                <StorefrontIcon className="sidebarIcon mr-1 text-xl" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem  p-1 cursor-pointer flex items-center rounded-xl ">
              <AttachMoneyIcon className="sidebarIcon mr-1 text-xl" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon mr-1 text-xl" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-xs text-cream ml-2">
            Notifications
          </h3>
          <ul className="sidebarList list-none p-1">
            <li className="sidebarListItem  p-1 cursor-pointer flex items-center rounded-xl ">
              <MailOutlineIcon className="sidebarIcon mr-1 text-xl" />
              Mail
            </li>
            <li className="sidebarListItem p-1 cursor-pointer flex items-center rounded-xl ">
              <DynamicFeedIcon className="sidebarIcon mr-1 text-xl" />
              Feedback
            </li>
            <li className="sidebarListItem p-1 cursor-pointer flex items-center rounded-xl ">
              <ChatBubbleIcon className="sidebarIcon mr-1 text-xl" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu mb-3">
          <h3 className="sidebarTitle text-xs text-cream ml-2">Staff</h3>
          <ul className="sidebarList list-none p-1">
            <li className="sidebarListItem  p-1 cursor-pointer flex items-center rounded-xl ">
              <WorkOutlineIcon className="sidebarIcon mr-1 text-xl" />
              Manage
            </li>
            <li className="sidebarListItem p-1 cursor-pointer flex items-center rounded-xl">
              <TimelineIcon className="sidebarIcon mr-1 text-xl" />
              Analytics
            </li>
            <li className="sidebarListItem p-1 cursor-pointer flex items-center rounded-xl">
              <ReportIcon className="sidebarIcon mr-1 text-xl" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
