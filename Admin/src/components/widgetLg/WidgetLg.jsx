import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import './widgetLg.css';
import { format } from 'timeago.js';

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg flex-[2] shadow-3xl p-5 ">
      <h3 className="widgetLgTitle text-2xl font-semibold">
        Latest transactions
      </h3>
      <table className="widgetLgTable w-full border-spacing-5">
        <tr className="widgetLgTr">
          <th className="widgetLgTh text-left">Customer</th>
          <th className="widgetLgTh text-left">Date</th>
          <th className="widgetLgTh text-left">Amount</th>
          <th className="widgetLgTh text-left">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser flex items-center font-semibold">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate font-light">
              {format(order.createdAt)}
            </td>
            <td className=" font-light">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
