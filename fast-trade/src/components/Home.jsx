import React, { useState, useEffect } from "react";
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import Banner from '../images/Group 3BlackFriday (3).png'
import Products from "./Products";
import Provider from "../context/Provider";
import Cart from "./Cart";

const Home = () => {
  // State to store the best-selling products
  return (
    <Provider>
      <Navbar/>
      <Browse />
      {/* <ImageCarousel /> */}
      <img src={Banner} alt="Black Friday" width={'100%'} z-index={3}/>
      <Products/>
      <Cart/>
      <Footer />
    </Provider>
  );
};

export default Home;
