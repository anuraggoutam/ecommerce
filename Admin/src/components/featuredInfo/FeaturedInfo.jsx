import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income');
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {
        throw new Error(err);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="featured w-full flex justify-between">
      <div className="featuredItem flex-1 my-0 mx-5 p-8 rounded-xl cursor-pointer shadow-3xl">
        <span className="featuredTitle text-xs">Revanue</span>
        <div className="featuredMoneyContainer my-3 mx-0 flex items-center">
          <span className="featuredMoney text-3xl font-semibold ">
            ${income[1]?.total}
          </span>
          <span className="featuredMoneyRate flex items-center ml-5">
            %{Math.floor(perc)}{' '}
            {perc < 0 ? (
              <ArrowDropDownIcon className="featuredIcon negative featuredIcon negative text-sm ml-1  text-red-500" />
            ) : (
              <ArrowDropUpIcon className="featuredIcon featuredIcon text-sm ml-1 text-green-500" />
            )}
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
