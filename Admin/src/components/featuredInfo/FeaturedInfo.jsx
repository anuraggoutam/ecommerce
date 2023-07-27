import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function FeaturedInfo() {
  return (
    <div className="featured w-full flex justify-between">
      <div className="featuredItem flex-1 my-0 mx-5 p-8 rounded-xl cursor-pointer shadow-3xl">
        <span className="featuredTitle text-xs">Revanue</span>
        <div className="featuredMoneyContainer my-3 mx-0 flex items-center">
          <span className="featuredMoney text-3xl font-semibold ">$2,415</span>
          <span className="featuredMoneyRate flex items-center ml-5">
            -11.4{' '}
            <ArrowDropDownIcon className="featuredIcon negative text-sm ml-1   text-red-500" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem flex-1 my-0 mx-5 p-8 rounded-xl cursor-pointer shadow-3xl">
        <span className="featuredTitle text-xs">Sales</span>
        <div className="featuredMoneyContainer my-3 mx-0 flex items-center">
          <span className="featuredMoney text-3xl font-semibold ">$4,415</span>
          <span className="featuredMoneyRate flex items-center ml-5">
            -1.4{' '}
            <ArrowDropDownIcon className="featuredIcon negative text-sm ml-1  text-red-500" />
          </span>
        </div>
        <span className="featuredSub text-base text-gray-400">
          Compared to last month
        </span>
      </div>
      <div className="featuredItem flex-1 my-0 mx-5 p-8 rounded-xl cursor-pointer shadow-3xl">
        <span className="featuredTitle text-xs">Cost</span>
        <div className="featuredMoneyContainer my-3 mx-0 flex items-center">
          <span className="featuredMoney text-3xl font-semibold ">$2,225</span>
          <span className="featuredMoneyRate flex items-center ml-5">
            +2.4{' '}
            <ArrowDropUpIcon className="featuredIcon text-sm ml-1 text-green-500" />
          </span>
        </div>
        <span className="featuredSub text-base text-gray-400">
          Compared to last month
        </span>
      </div>
    </div>
  );
}
