import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="h-14 smx:h-12 w-screen ">
      <div className="wraaper py-3 px-6 flex justify-between smx:py-2 smx:px-0 items-center">
        <div className="left flex-1 flex items-center smx:pr-4">
          <span className="language text-sm cursor-pointer smx:hidden">EN</span>
          <div className="serchC items-center flex  border-solid border-gray-700 border-1 ml-6 p-1">
            <label htmlFor="me">
              <input type="text" className="outline-none smx:w-12" id="me" />
              <SearchIcon className="text-gray-700 text-sm" />
            </label>
          </div>
        </div>
        <div className="center flex-1 text-center">
          <h1 className="font-[800] smx:text-xl smx:ml-2">ANIMEVERSE</h1>
        </div>
        <div className="right flex justify-end  items-center  flex-1 -pr-12 smx:flex-[2] smx:justify-center">
          <div className="text-sm cursor-pointer ml-5 smx:ml-3">REGISTER</div>
          <div className="text-sm cursor-pointer ml-5 smx:ml-3">SIGN IN</div>
          <Link to="/cart">
            <div className=" menu text-sm cursor-pointer ml-5 smx:text-xs smx:ml-3">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
