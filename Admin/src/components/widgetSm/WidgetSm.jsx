import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';
import { toast } from 'react-toastify';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get(`users/?new=true`);
        setUsers(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm flex-1 shadow-3xl p-5 mr-5 ">
      <span className="widgetSmTitle text-2xl font-semibold">
        New Join Members
      </span>
      <ul className="widgetSmList m-0 p-0 list-none">
        {users.map((user) => (
          <li
            className="widgetSmListItem flex items-center justify-between my-5 mx-0"
            key={user.id}
          >
            <img
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=""
              className="widgetSmImg w-10 h-10 rounded-[50%] object-cover"
            />
            <div className="widgetSmUser flex flex-col">
              <span className="widgetSmUsername font-semibold">
                {user.username}
              </span>
            </div>
            <button className="widgetSmButton flex items-center border-none rounded-[50%] py-2 px-3 bg-[#eeeef7]">
              <VisibilityIcon className="widgetSmIcon text-base mr-1" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
