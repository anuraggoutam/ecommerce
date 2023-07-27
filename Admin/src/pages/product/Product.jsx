import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
  return (
    <div className="product flex-[4] p-5">
      <div className="productTitleContainer flex items-center justify-between">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton w-20 border-none p-1 bg-teal-500 text-white rounded-md text-base cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="productTop flex">
        <div className="productTopLeft flex-[1]">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight flex-[1] p-5 m-5 shadow-3xl">
          <div className="productInfoTop flex items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfoImg w-10 h-10 rounded-[50%] object-cover mr-5"
            />
            <span className="productName font-semibold ">Apple Airpods</span>
          </div>
          <div className="productInfoBottom mt-3">
            <div className="productInfoItem w-36 flex justify-between font-light ">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue font-light ">123</span>
            </div>
            <div className="productInfoItem w-36 flex justify-between font-light ">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue font-light ">5123</span>
            </div>
            <div className="productInfoItem w-36 flex justify-between font-light ">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue font-light ">yes</span>
            </div>
            <div className="productInfoItem w-36 flex justify-between font-light ">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue font-light ">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom p-5 m-5 shadow-3xl ">
        <form className="productForm flex justify-between">
          <div className="productFormLeft flex flex-col">
            <label className="mb-3 text-gray-500">Product Name</label>
            <input
              type="text"
              placeholder="Apple AirPod"
              className="mb-3  p-1 border-b-2 border-solid border-gray-500 "
            />
            <label className="mb-3 text-gray-500">In Stock</label>
            <select name="inStock" id="idStock" className=" mb-3">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-3 text-gray-500">Active</label>
            <select name="active" id="active" className=" mb-3">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight flex flex-col justify-around">
            <div className="productUpload flex items-center">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg w-24 h-24 rounded-xl object-covermr-5 "
              />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton border-none p-1 rounded-md bg-blue-700 text-white font-semibold cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
