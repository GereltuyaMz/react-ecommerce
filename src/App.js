import React, { useState } from "react";
import './App.css';
import Header from './home/Header';
import Navigation from './home/Navigation';
import Hero from './home/Hero';
import PopularProducts from './home/PopularProducts';
import { popularProducts } from "./data/products";

function App() {
  const [addWishlist, setAddWishlist] = useState([]);

  const handleWishlist = (productId) => {
    const filtered = popularProducts.filter(product => product.id === productId);
    // console.log("filteredProduct", ...filtered);
    setAddWishlist([...addWishlist, ...filtered]);
  };

  return (
    <div className="app">
      <Header addWishlist={addWishlist} />
      <Navigation />
      <Hero />
      <PopularProducts handleWishlist={handleWishlist} />
    </div>
  );
}

export default App;
