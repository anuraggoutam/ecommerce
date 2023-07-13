import Product from './Product';
import { popularProducts } from '../data';
const ProductsList = () => {
  return (
    <div className="Cona p-5 flex flex-wrap justify-between w-screen h-full ">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsList;
