import { categories } from '../data';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  return (
    <div className=" flex p-5 justify-between w-screen h-full    ">
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
