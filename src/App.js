import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import SignIn from "./SignIn";
import Header from "./home/Header";
import Navigation from "./home/Navigation";
import Detail from "./Detail"

function App() {
  const [addWishList, setAddWishList] = useState([]);
  return (
    <>
      <Header addWishList={addWishList} setAddWishList={setAddWishList} />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <Home
            setAddWishList={setAddWishList}
            addWishList={addWishList}
          />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>

  );
}

export default App;
