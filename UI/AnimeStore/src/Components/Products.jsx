import Product from './Product';
import { popularProducts } from '../data';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ cat, filters, sort }) => {
  const filter = (arr, criteria) => {
    return arr.filter(function (obj) {
      return Object.keys(criteria).every(function (c) {
        return new RegExp(criteria[c]).test(obj[c]);
      });
    });
  };

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //fetching all products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getProducts();
  }, [cat]);

  //filtering products
  useEffect(() => {
    cat && setFilteredProducts(filter(products, filters));
  }, [products, cat, filters]);
  //sorting products
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="Cona p-5 flex flex-wrap justify-between w-screen h-full ">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
