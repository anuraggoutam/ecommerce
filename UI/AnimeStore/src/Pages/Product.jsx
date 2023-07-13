import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';

const Product = () => {
  return (
    <div className="Container">
      <Navbar />
      <Announcement />
      <div className="wrapper p-5 flex smx:p-2 smx:flex-col">
        <div className="ImgCon flex-1">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-full h-[90vh] object-cover smx:h-[40vh]"
            alt=""
          />
        </div>
        <div className="infoCon flex-1 py-0 px-12 smx:p-2">
          <h1 className="title font-extralight">Denim Jumpsuit</h1>
          <p className="my-5 mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            qui maxime, perferendis at delectus vitae nesciunt quia. Distinctio
            facere beatae laboriosam odio, ipsum ducimus aperiam in? Eaque odio
            repudiandae hic ex at.
          </p>
          <span className="text-xl font-extralight">$ 20</span>
          <div className="filterCon w-1/2 my-7 mx-0 flex justify-between smx:w-full gap-3 ">
            <div className="filter flex items-center">
              <span className="text-xl font-extralight mr-2">Color</span>
              <div className="filterColor w-5 h-5 mr-1 rounded-[50%] bg-black" />
              <div className="filterColor w-5 h-5 mr-1 rounded-[50%] bg-blue-900" />
              <div className="filterColor w-5 h-5 mr-1 rounded-[50%] bg-gray-500" />
            </div>
            <div className="filter flex items-center">
              <span className="text-xl font-extralight">Size</span>
              <select name="" id="" className="ml-2 p-1">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className="addContainer w-1/2 flex items-center justify-center smx:w-full">
            <div className="Amount  flex items-center font-bold">
              <AddIcon />
            </div>
            <span className="Amount w-7 h-7 rounded-[10px] border-1 border-solid border-teal-500 flex items-center justify-center my-0 mx-1">
              1
            </span>
            <div className="Amount  flex items-center font-bold">
              <RemoveIcon />
            </div>
            <button className="text-base border-2 border-solid border-teal-500 bg-white cursor-auto font-medium hover:bg-[#f8f4f4]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
