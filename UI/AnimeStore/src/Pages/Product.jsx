import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (err) {
        toast.error(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="Container">
      <Navbar />
      <Announcement />
      <div className="wrapper p-5 flex smx:p-2 smx:flex-col">
        <div className="ImgCon flex-1">
          <img
            src={product.img}
            className="w-full h-[90vh] object-cover smx:h-[40vh]"
            alt=""
          />
        </div>
        <div className="infoCon flex-1 py-0 px-12 smx:p-2">
          <h1 className="title font-extralight">{product.title}</h1>
          <p className="my-5 mx-0">{product.desc}</p>
          <span className="text-xl font-extralight">$ {product.price}</span>
          <div className="filterCon w-1/2 my-7 mx-0 flex justify-between smx:w-full gap-3 ">
            <div className="filter flex items-center">
              <span className="text-xl font-extralight mr-2">Color</span>
              {product.color?.map((c) => {
                <div
                  className={`filterColor w-5 h-5 mr-1 rounded-[50%] bg-[${c}]`}
                  key={c}
                  onClick={() => setColor(c)}
                />;
              })}
            </div>
            <div className="filter flex items-center">
              <span className="text-xl font-extralight">Size</span>
              <select
                className="ml-2 p-1"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => {
                  <option key={s}>{s}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="addContainer w-1/2 flex items-center justify-center smx:w-full">
            <div className="Amount  flex items-center font-bold">
              <RemoveIcon onClick={() => handleQuantity('dec')} />
            </div>
            <span className="Amount w-7 h-7 rounded-[10px] border-1 border-solid border-teal-500 flex items-center justify-center my-0 mx-1">
              {quantity}
            </span>
            <div className="Amount  flex items-center font-bold">
              <AddIcon onClick={() => handleQuantity('inc')} />
            </div>
            <button
              className="text-base border-2 border-solid border-teal-500 bg-white cursor-auto font-medium hover:bg-[#f8f4f4]"
              onClick={handleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
