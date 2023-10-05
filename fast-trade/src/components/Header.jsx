import React from "react";
import '../styles/Navbar.css'
import '../styles/Header.css'
import Logo from "../icons/Logo_FT.svg";
import Home from "../icons/icons8-casa-24.png";
import { Link } from 'react-router-dom';


const Header = () =>  {
  return (
    <nav className="headerHome">
      <div className="navbarContainer">

        
        <a href="/" className="fastTrade">
          <img src={Logo} alt="FastTrade" />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-a">
              <img src={Home} alt="Home" />
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Header;

