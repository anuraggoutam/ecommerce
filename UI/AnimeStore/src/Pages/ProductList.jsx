import Newsletter from '../Components/Newsletter';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Products from '../Components/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log(filters);
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="m-5">{cat}</h1>
      <div className="filterCon flex justify-between">
        <div className="filter m-5 smx:w-5 smx:flex smx:flex-col ">
          <span className="filterText text-xl font-semibold mr-5 smx:mr-0">
            Filter Product
          </span>
          <select
            name="color"
            className="p-2 mr-5 smx:my-2 smx:mx-0 smx:w-max"
            onChange={handleFilters}
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            name="size"
            className="p-2 mr-5 smx:my-2 smx:mx-0 smx:w-max"
            onChange={handleFilters}
          >
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter m-5 smx:w-5 smx:flex smx:flex-col smx:mr-28">
          <span className="filterText filterText text-xl font-semibold mr-5 smx:mr-0 ">
            Sort Product
          </span>
          <select
            className="p-2 mr-5 smx:my-2 smx:mx-0 smx:w-max"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest" disabled>
              Newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="dsc">Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="filterCon">
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
