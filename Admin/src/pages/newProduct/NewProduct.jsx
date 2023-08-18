import { useState } from 'react';

export default function NewProduct() {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="newProduct flex-[9] ml-5">
      <h1 className="addProductTitle ">New Product</h1>
      <form className="addProductForm mt-3">
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Image</label>
          <input
            type="file"
            id="file"
            className="p-3"
            onChange={(e) => setFile(e.target.files)[0]}
          />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label
            className=" text-gray-500 font-bold mb-3"
            onClick={handleChange}
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Apple Airpods"
            className="p-3"
            onClick={handleChange}
          />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Description</label>
          <input
            type="text"
            name="description"
            placeholder="description...."
            className="p-3"
            onClick={handleChange}
          />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Price</label>
          <input
            type="text"
            placeholder="price"
            className="p-3"
            onClick={handleChange}
          />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Categories</label>
          <input
            type="text"
            className="p-3"
            placeholder="#jeans ,#skirts"
            onClick={handleCat}
          />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Stock</label>
          <select
            name="active"
            id="active"
            className="p-3"
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button
          className="addProductButton mt-3 py-2 px-3 border-none rounded-[10px] bg-blue-600 text-white font-bold cursor-pointer"
          onClick={handleClick}
        >
          Create
        </button>
      </form>
    </div>
  );
}
