import React, { useState } from "react";
import './App.css';
import { popularProducts } from "./data/products";
import Header from './home/Header';
import Navigation from './home/Navigation';
import Hero from './home/Hero';
import PopularProducts from './home/PopularProducts';
import Sale from "./home/Sale";
import ProductShowcase from "./home/ProductShowcase";

function App() {
  const [addWishlist, setAddWishlist] = useState([]);

  const handleWishlist = (productId) => {
    const filtered = popularProducts.filter(product => product.id === productId);
    setAddWishlist([...addWishlist, ...filtered]);
  };

  return (
    <div className="app">
      <Header addWishlist={addWishlist} />
      <Navigation />
      <Hero />
      <PopularProducts handleWishlist={handleWishlist} />
      <Sale />
      <ProductShowcase />
    </div>
  );
}

export default App;
