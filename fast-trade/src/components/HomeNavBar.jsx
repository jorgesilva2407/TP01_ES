import React, { useState, useEffect } from "react";
import '../styles/navbar.css'
// import { Link } from 'react-router-dom';     // If you're using React Router for navigation

const Navbar = () =>  {

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);

    // Effect to load the best-selling products
    useEffect(() => {
        // Load best-selling products from the API
        fetch("/api/products/best-sellers")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    const handleSearch = () => {
        // Filter the products based on the search query
        const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Update the products state with the filtered list
        setProducts(filteredProducts);
    };

    const clearSearch = () => {
        setSearchQuery('');
        // Fetch the initial product list from the API again
        fetch("/api/products/best-sellers")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };


  return (
    <nav className="navbarHome">
      <div className="navbarContainer">
        <a href="/" className="fastTrade">FastTrade</a>
        <div className="search-box">
        <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <button onClick={clearSearch}>Clear</button>
            <button onClick={handleSearch}>Search</button>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/home" className="nav-a">Home</a>
          </li>
          <li className="nav-item">
            <a href="/browse" className="nav-a">Browse</a>
          </li>
          <li className="nav-item">
            <a href="/sell" className="nav-a">Sell</a>
          </li>
          <li className="nav-item">
            <a href="/cart" className="nav-a">Cart</a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-a">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

