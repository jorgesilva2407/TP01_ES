import React, { useState, useEffect } from "react";
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import UserAuthenticationPage from "./UserAuthenticationPage";

const Home = ({ userIsLoggedIn, handleLogout }) => {
  // State to store the best-selling products
  return (
    <div>
      <Navbar userIsLoggedIn={userIsLoggedIn} handleLogout={handleLogout}/>
      <Browse />
      <ImageCarousel />
      <Footer />
    </div>
  );
};

export default Home;
