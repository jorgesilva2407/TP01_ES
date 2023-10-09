import React, { useState, useEffect } from "react";
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import Provider from "../context/Provider";
import UserPage from "./UserPage";
import Cart from "./Cart";

const Home = ({user}) => {
  // State to store the best-selling products
  return (
    <Provider>
      <Navbar/>
      <Browse />
      <UserPage user={user}/>
      <Cart/>
      <Footer />
    </Provider>
  );
};

export default Home;
