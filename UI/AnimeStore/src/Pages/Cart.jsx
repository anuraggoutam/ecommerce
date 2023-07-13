import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
  return (
    <div className="container ">
      <Navbar />
      <Announcement />
      <div className="wrapper p-5 smx:p-2 w-screen ">
        <h1 className=" font-bold text-2xl text-center">
          <b>Your Bag</b>
        </h1>
        <div className="top flex items-center justify-between p-5">
          <button className="topbutton p-2 font-semibold cursor-pointer  border-black border-1">
            CONTINUE SHOPPING
          </button>
          <div className="toptexts smx:hidden">
            <span className="toptext no-underline cursor-pointer my-0 mx-2">
              Shopping Bag(2)
            </span>
            <span className="toptext no-underline cursor-pointer my-0 mx-2">
              Your Wishlist (0)
            </span>
          </div>
          <div className="topbutton p-2 font-semibold cursor-pointer border-none bg-black text-white">
            CHECKOUT NOW
          </div>
        </div>
        <div className="bottom flex justify-between smx:flex-col">
          <div className="info flex-[3]">
            <div className="product flex justify-between smx:flex-col">
              <div className="productDetails flex flex-[2]">
                <img
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[200px]"
                />
                <div className="Details p-5 flex flex-col justify-around">
                  <div className="productName">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </div>
                  <div className="productID">
                    <b>ID:</b>5585144555454
                  </div>
                  <div className="productColor" />
                  <div className="productSize">
                    <b>Size:</b> 37.5
                  </div>
                </div>
              </div>
              <div className="priceDetail flex-1 flex flex-col items-center justify-center">
                <div className="productAmtCO flex items-center mb-5">
                  <AddIcon />
                  <div className="productamt text-2xl m-1 smx:my-1 smx:mx-4">
                    2
                  </div>
                  <RemoveIcon />
                </div>
                <div className="productPrice text-[30px] font-extralight smx:mb-5">
                  $ 30
                </div>
              </div>
            </div>
            <hr className="bg-[#eee] border-none h-[1px]" />
            <div className="product flex justify-between smx:flex-col">
              <div className="productDetails flex flex-[2]">
                <img
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-[200px]"
                />
                <div className="Details  p-5 flex flex-col justify-around">
                  <div className="productName">
                    <b>Product:</b>
                  </div>
                  <div className="productID">
                    <b>ID:</b>5585144555454
                  </div>
                  <div className="productColor" />
                  <div className="productSize">
                    <b>Size:</b> 37.5
                  </div>
                </div>
              </div>
              <div className="priceDetail flex-1 flex flex-col items-center justify-center">
                <div className="productAmtCO flex items-center mb-5">
                  <AddIcon />
                  <div className="productamt text-2xl m-1 smx:my-1 smx:mx-4">
                    2
                  </div>
                  <RemoveIcon />
                </div>
                <div className="productPrice text-[30px] font-extralight smx:mb-5">
                  $ 30
                </div>
              </div>
            </div>
          </div>
          <div className="summary flex-1 border-[0.5px] border-solid border-gray-500 rounded-[10px] p-5 h-[50vh] ">
            <h1 className="title font-extralight">ORDER SUMMERY</h1>
            <div className="summaryItem my-7 mx-0 flex justify-between">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">$80</span>
            </div>
            <div className="summaryItem my-7 mx-0 flex justify-between">
              <span className="summaryItemText">Estimated Shipping</span>
              <span className="summaryItemPrice">$5.90</span>
            </div>
            <div className="summaryItem my-7 mx-0 flex justify-between">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">$-5.90</span>
            </div>

            <div className="summaryTotal my-7 mx-0 flex justify-between font-medium text-2xl ">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">$80</span>
            </div>
            <button className="w-full p-2 bg-black text-white font-semibold">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
