import React, { useState, useEffect } from "react";
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import CategoriesCard from "./CategoriesCard"
import ImageCarousel from "./ImageCarousel";
import Banner from '../images/Group 3BlackFriday (3).png'
import Products from "./Products";
import Provider from "../context/Provider";
import Cart from "./Cart";

const Home = () => {
  // State to store the best-selling products

  
  // useEffect(() => {
  //   // Retrieve the username from local storage
  //   const storedUsername = localStorage.getItem('name');

  //   // Check if the username is set and log it
  //   if (storedUsername) {
  //     console.log('name in local storage:', storedUsername);
  //   } else {
  //     console.log('name not found in local storage');
  //   }
  // }, []);

  return (
    <Provider>
      <Navbar/>
      <Browse />
      {/* <ImageCarousel /> */}
      <img src={Banner} alt="Black Friday" width={'100%'} z-index={3}/>
      <CategoriesCard />
      <Products itemsPerPage={16} pageNumber={1} byCategory={true}/>
      <Cart/>
      <Footer />
    </Provider>
  );
};

export default Home;
