

export default function NewProduct() {
  return (
    <div className="newProduct flex-[4]">
      <h1 className="addProductTitle ">New Product</h1>
      <form className="addProductForm mt-3">
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Image</label>
          <input type="file" id="file" className="p-3" />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Name</label>
          <input type="text" placeholder="Apple Airpods" className="p-3" />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Stock</label>
          <input type="text" placeholder="123" className="p-3" />
        </div>
        <div className="addProductItem flex w-[250px] flex-col mb-2">
          <label className=" text-gray-500 font-bold mb-3">Active</label>
          <select name="active" id="active" className="p-3">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton mt-3 py-2 px-3 border-none rounded-[10px] bg-blue-600 text-white font-bold cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}
