export default function WidgetLg() {
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
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-[50%] object-cover mr-2"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2021</td>
          <td className=" font-light">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-[50%] object-cover mr-2"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2021</td>
          <td className="widgetLgAmount font-light">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-[50%] object-cover mr-2"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2021</td>
          <td className="widgetLgAmount font-light">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser flex items-center font-semibold">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg w-10 h-10 rounded-[50%] object-cover mr-2"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate font-light">2 Jun 2021</td>
          <td className="widgetLgAmount font-light">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
