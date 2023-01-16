import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Hero from './Hero';
import PopularProducts from './PopularProducts';
import Sale from './Sale';
import ProductShowcase from './ProductShowcase';
import { popularProducts } from '../data/products';

const Home = () => {
  const [addWishlist, setAddWishlist] = useState([]);

  const handleWishlist = (productId) => {
    const filtered = popularProducts.filter(product => product.id === productId);
    setAddWishlist([...addWishlist, ...filtered]);
  };
  return (
    <div>
      {/* <Header addWishlist={addWishlist} />
      <Navigation /> */}
      <Hero />
      <PopularProducts handleWishlist={handleWishlist} />
      <Sale />
      <ProductShowcase />
    </div>
  )
}

export default Home