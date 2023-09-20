import React, { useState, useEffect } from "react";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel"
import UserAuthenticationPage from "./UserAuthenticationPage";

const Home = () => {
  // State to store the best-selling products
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Navbar />
      {/* Searchbox */}
      <ImageCarousel />
      <Footer />
    </div>
  );
};

export default Home;
