import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = (props) => {
  return (
    <div className="con flex w-screen ">
      <div className="left flex-1 flex flex-col p-5 ">
        <h1 className="LOGO font-extrabold text-2xl">ANIMEVERSE</h1>
        <p className="desc my-5 mx-0 ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="socialCon flex">
          <div className="SCicons w-10 h-10 rounded-[50%] text-white bg-[385999] fleex items-center justify-center mr-5">
            <FacebookIcon />
          </div>
          <div className="SCicons w-10 h-10 rounded-[50%] text-white bg-[E4405F] fleex items-center justify-center mr-5">
            <InstagramIcon />
          </div>
          <div className="SCicons w-10 h-10 rounded-[50%] text-white bg-[55ACEE] fleex items-center justify-center mr-5">
            <TwitterIcon />
          </div>
          <div className="SCicons w-10 h-10 rounded-[50%] text-white bg-[E60023] fleex items-center justify-center mr-5">
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="center flex-1 p-5 smx:hidden">
        <h3 className="mb-7 font-extrabold text-2xl">Useful Links</h3>
        <ul className="m-0 p-0 no-underline flex flex-wrap">
          <li className="w-1/2 mb-2">Home</li>
          <li className="w-1/2 mb-2">Cart</li>
          <li className="w-1/2 mb-2">Man Fashion </li>
          <li className="w-1/2 mb-2">Accessories</li>
          <li className="w-1/2 mb-2">My Account</li>
          <li className="w-1/2 mb-2">Order Tracking</li>
          <li className="w-1/2 mb-2">Wishlist</li>
          <li className="w-1/2 mb-2">Terms</li>
        </ul>
      </div>
      <div className="right flex-1 p-5 smx:bg-[#fff8f8]">
        <div className="title font-extrabold text-2xl">Contact</div>
        <div className="ContactItem mb-5 flex items-center"></div>
        <div className="ContactItem mb-5 flex items-center"></div>
        <div className="ContactItemmb-5 flex items-center"></div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
          className="w-[50%]"
        />
      </div>
    </div>
  );
};

export default Footer;
