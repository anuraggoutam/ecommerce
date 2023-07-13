const CategoriesItem = ({ item }) => {
  return (
    <div className="flex-[1] ml-3 h-[70vh] relative ">
      <img
        src={item.img}
        className="w-full h-full object-cover"
        alt=""
        
      />
      <div className="absolute top-0 bottom-0 w-full h-full flex flex-col items-center justify-center ">
        <h1 className="text-white mb-5 ">{item.title}</h1>
        <button className="border-none p-2 bg-white text-gray-500 cursor-pointer font-semibold">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoriesItem;
