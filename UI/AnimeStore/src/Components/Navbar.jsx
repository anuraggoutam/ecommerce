import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className="h-14 smx:h-12 ">
      <div className="wraaper py-3 px-6 flex justify-between smx:py-2 smx:px-0 items-center">
        <div className="left flex-1 flex items-center smx:pr-4">
          <span className="language text-sm cursor-pointer smx:hidden">EN</span>
          <div className="serchC items-center flex  border-solid border-gray-700 border-1 ml-6 p-1">
            <input type="text" className="outline-none smx:w-12" />
            <SearchIcon className="text-gray-700 text-sm" />
          </div>
        </div>
        <div className="center flex-1 text-center">
          <h1 className="font-[800] smx:text-xl smx:ml-2">ANIMEVERSE</h1>
        </div>
        <div className="right flex justify-end  items-center  flex-1 smx:flex-[2] smx:justify-center">
          <div className="text-sm cursor-pointer ml-6 smx:ml-3">REGISTER</div>
          <div className="text-sm cursor-pointer ml-6 smx:ml-3">SIGN IN</div>
          <div className=" menu text-sm cursor-pointer ml-6 smx:text-xs smx:ml-3">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
