import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm flex-1 shadow-3xl p-5 mr-5 ">
      <span className="widgetSmTitle text-2xl font-semibold">
        New Join Members
      </span>
      <ul className="widgetSmList m-0 p-0 list-none">
        <li className="widgetSmListItem flex items-center justify-between my-5 mx-0">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-semibold">Anna Keller</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center border-none rounded-[50%] py-2 px-3 bg-[#eeeef7]">
            <VisibilityIcon className="widgetSmIcon text-base mr-1" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem flex items-center justify-between my-5 mx-0">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-semibold">Anna Keller</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center border-none rounded-[50%] py-2 px-3 bg-[#eeeef7]">
            <VisibilityIcon className="widgetSmIcon text-base mr-1" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem flex items-center justify-between my-5 mx-0">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-semibold">Anna Keller</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center border-none rounded-[50%] py-2 px-3 bg-[#eeeef7]">
            <VisibilityIcon className="widgetSmIcon text-base mr-1" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem flex items-center justify-between my-5 mx-0">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-semibold">Anna Keller</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center border-none rounded-[50%] py-2 px-3 bg-[#eeeef7]">
            <VisibilityIcon className="widgetSmIcon text-base mr-1" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem flex items-center justify-between my-5 mx-0">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="widgetSmUser flex flex-col">
            <span className="widgetSmUsername font-semibold">Anna Keller</span>
            <span className="widgetSmUserTitle font-light">
              Software Engineer
            </span>
          </div>
          <button className="widgetSmButton flex items-center border-none rounded-[50%] py-2 px-3 bg-[#eeeef7]">
            <VisibilityIcon className="widgetSmIcon text-base mr-1" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
