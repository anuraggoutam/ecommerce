import Newsletter from '../Components/Newsletter';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Products from '../Components/Products';

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="m-5">Dresses</h1>
      <div className="filterCon flex justify-between">
        <div className="filter m-5 smx:w-5 smx:flex smx:flex-col">
          <span className="filterText text-xl font-semibold mr-5 smx:mr-0">
            Filter Product
          </span>
          <select name="" id="" className="p-2 mr-5 smx:my-2 smx:mx-0">
            <option value="" disabled>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select name="" id="" className="p-2 mr-5 smx:my-2 smx:mx-0">
            <option value="" disabled>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="filter m-5 smx:w-5 smx:flex smx:flex-col">
          <span className="filterText filterText text-xl font-semibold mr-5 smx:mr-0">
            Sort Product
          </span>
          <select name="" id="" className="p-2 mr-5 smx:my-2 smx:mx-0">
            <option value="" disabled>
              Newest
            </option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="filterCon">
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
