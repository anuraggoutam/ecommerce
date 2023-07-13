import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = ({item}) => {
  return (
    <div className="Con flex-[1] m-1 min-w-[280px] h-[350px] flex items-center justify-center bg-[#f5fbfb] relative ">
      <div className="circle w-52 h-52 rounded-[50%] bg-white absolute" />
      <img src={item.img} className="h-3/4 z-[2]" alt="" />
      <div
        className="info opacity-0 w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center cursor-pointer hover:opacity-[1]"
        style={{ transition: 'all 0.5s ease' }}
      >
        <div
          className="icon w-10 h-10 rounded-[50%] bg-white flex items-center justify-center m-2 hover:bg-[#e9f5f5] "
          style={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
        >
          <ShoppingCartOutlinedIcon />
        </div>
        <div
          className="icon w-10 h-10 rounded-[50%] bg-white flex items-center justify-center m-2 hover:bg-[#e9f5f5] "
          style={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
        >
          <SearchOutlinedIcon />
        </div>
        <div
          className="icon w-10 h-10 rounded-[50%] bg-white flex items-center justify-center m-2 hover:bg-[#e9f5f5] "
          style={{ transform: 'scale(1.1)', transition: 'all 0.5s ease' }}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
