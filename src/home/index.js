import React, { useState } from 'react';
import Hero from './Hero';
import PopularProducts from './PopularProducts';
import Sale from './Sale';
import ProductShowcase from './ProductShowcase';

const Home = ({ addWishList, setAddWishList }) => {
  return (
    <>
      <Hero />
      <PopularProducts addWishList={addWishList} setAddWishList={setAddWishList} />
      <Sale />
      <ProductShowcase />
    </>
  )
}

export default Home