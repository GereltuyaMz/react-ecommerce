import React, { useState } from "react";
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./home";
import About from "./About";
import SignIn from "./SignIn";
import Header from "./home/Header";
import Navigation from "./home/Navigation";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="header"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>

  );
}

export default App;
