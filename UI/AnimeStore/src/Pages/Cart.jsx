import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

// const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/success', {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch (err) {
        throw new Error(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);

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
            {cart.products.map((product) => {
              <div className="product flex justify-between smx:flex-col">
                <div className="productDetails flex flex-[2]">
                  <img src={product.img} alt="" className="w-[200px]" />
                  <div className="Details p-5 flex flex-col justify-around">
                    <div className="productName">
                      <b>Product:</b> {product.title}
                    </div>
                    <div className="productID">
                      <b>ID:</b>
                      {product._id}
                    </div>
                    <div
                      className="productColor w-5 h-5 rounded-[50%] "
                      style={{ background: `${product.color}` }}
                    />
                    <span className="productSize">
                      <b>Size:</b>
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className="priceDetail flex-1 flex flex-col items-center justify-center">
                  <div className="productAmtCO flex items-center mb-5">
                    <AddIcon />
                    <div className="productamt text-2xl m-1 smx:my-1 smx:mx-4">
                      {product.quantity}
                    </div>
                    <RemoveIcon />
                  </div>
                  <div className="productPrice text-[30px] font-extralight smx:mb-5">
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>;
            })}
            <hr className="bg-[#eee] border-none h-[1px]" />
          </div>
          <div className="summary flex-1 border-[0.5px] border-solid border-gray-500 rounded-[10px] p-5 h-[50vh] ">
            <h1 className="title font-extralight">ORDER SUMMERY</h1>
            <div className="summaryItem my-7 mx-0 flex justify-between">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">${cart.total}</span>
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
              <span className="summaryItemPrice">{cart.total}</span>
            </div>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={import.meta.env.REACT_APP_STRIPE}
            >
              <button className="w-full p-2 bg-black text-white font-semibold">
                CHECKOUT NOW
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
