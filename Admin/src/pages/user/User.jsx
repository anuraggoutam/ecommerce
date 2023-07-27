import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublishIcon from '@mui/icons-material/Publish';

import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className="user flex-auto p-5">
      <div className="userTitleContainer flex items-center justify-between">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton w-20 border-none p-1 bg-teal-500 cursor-pointer text-white text-base">
            Create
          </button>
        </Link>
      </div>
      <div className="userContainer flex mt-5">
        <div className="userShow flex-1 p-5 shadow-3xl ">
          <div className="userShowTop flex items-center">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg w-10 h-10 rounded-[50%] object-cover"
            />
            <div className="userShowTopTitle flex flex-col ml-5">
              <span className="userShowUsername font-semibold">
                Anna Becker
              </span>
              <span className="userShowUserTitle font-light ">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="userShowBottom mt-5">
            <span className="userShowTitle text-sm font-semibold text-cream">
              Account Details
            </span>
            <div className="userShowInfo flex items-center my-5 mx-0 text-[#444]">
              <PermIdentityIcon className="userShowIcon text-base" />
              <span className="userShowInfoTitle ml-2">annabeck99</span>
            </div>
            <div className="userShowInfo flex items-center my-5 mx-0 text-[#444]">
              <CalendarTodayIcon className="userShowIcon text-base" />
              <span className="userShowInfoTitle ml-2">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo flex items-center my-5 mx-0 text-[#444]">
              <PhoneAndroidIcon className="userShowIcon text-base" />
              <span className="userShowInfoTitle ml-2">+1 123 456 67</span>
            </div>
            <div className="userShowInfo flex items-center my-5 mx-0 text-[#444]">
              <MailOutlineIcon className="userShowIcon text-base" />
              <span className="userShowInfoTitle ml-2">
                annabeck99@gmail.com
              </span>
            </div>
            <div className="userShowInfo flex items-center my-5 mx-0 text-[#444]">
              <LocationSearchingIcon className="userShowIcon text-base" />
              <span className="userShowInfoTitle ml-2">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate flex-[2] p-5 shadow-3xl  ml-5">
          <span className="userUpdateTitle text-2xl font-semibold">Edit</span>
          <form className="userUpdateForm flex justify-between mt-5">
            <div className="userUpdateLeft">
              <div className="userUpdateItem flex flex-col mt-2">
                <label className="mb-1 text-sm">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput  w-60 h-8 border-[1] border-solid border-gray-500"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-2">
                <label className="mb-1 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput  w-60 h-8 border-[1] border-solid border-gray-500"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-2">
                <label className="mb-1 text-sm">Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput  w-60 h-8 border-[1] border-solid border-gray-500"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-2">
                <label className="mb-1 text-sm">Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput  w-60 h-8 border-[1] border-solid border-gray-500"
                />
              </div>
              <div className="userUpdateItem flex flex-col mt-2">
                <label className="mb-1 text-sm">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput  w-60 h-8 border-[1] border-solid border-gray-500 "
                />
              </div>
            </div>
            <div className="userUpdateRight flex flex-col justify-between">
              <div className="userUpdateUpload flex items-center">
                <img
                  className="userUpdateImg w-[100px] h-[100px]  rounded-xl object-cover mr-5"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon cursor-pointer" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton rounded-md border-none p-1 cursor-pointer bg-blue-700 text-white font-semibold">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
