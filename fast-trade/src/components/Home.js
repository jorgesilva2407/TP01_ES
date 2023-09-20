import React, { useState, useEffect } from "react";
import Navbar from './HomeNavBar';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';
import UserAuthenticationPage from "./UserAuthenticationPage";


const Home = ({ userIsLoggedIn, handleLogout }) => {
  // State to store the best-selling products
  const [products, setProducts] = useState([]);

  return (
    <div>
      
      {/* Conditionally render the logout button when the user is logged in */}
      {userIsLoggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}

      <Navbar />

      <ImageCarousel />

      <Footer />
    </div>
  );
};

export default Home;
