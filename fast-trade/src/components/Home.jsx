import React, { useState, useEffect } from "react";
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";

import ItemGrid from "./ItemGrid";
import Vasco from "../images/vasco.png";

let items = [
  {"id": 1, "title": "TV", "image": "tv.jpg", "price": 2500},
  {"id": 2, "title": "iPhone", "image": "iphone.jpg", "price": 4000},
  {"id": 3, "title": "Laptop", "image": "laptop.jpg", "price": 1200},
  {"id": 4, "title": "Headphones", "image": "headphones.jpg", "price": 150},
  {"id": 5, "title": "Smartwatch", "image": "smartwatch.jpg", "price": 300},
  {"id": 6, "title": "Gaming Console", "image": "gaming-console.jpg", "price": 350},
  {"id": 7, "title": "Camera", "image": "camera.jpg", "price": 800},
  {"id": 8, "title": "Tablet", "image": "tablet.jpg", "price": 450},
]


const Home = () => {
  // State to store the best-selling products
  return (
    <div>
      <Navbar/>
      <Browse />
      <ImageCarousel />
      <ItemGrid items={items}/>
      <Footer />
    </div>
  );
};

export default Home;
