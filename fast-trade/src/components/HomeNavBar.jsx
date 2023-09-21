import React from "react";
import '../styles/Navbar.css'
import SearchBar from "./SearchBar";
import CartButton from "./CartButton"
import Logo from "../icons/Logo_FT.svg";
import Home from "../icons/icons8-casa-24.png";
import Sell from "../icons/icons8-vender-30.png";
import Profile from "../icons/icons8-usuário-homem-com-círculo-24.png";
import { Link } from 'react-router-dom';


const Navbar = () =>  {
  return (
    <nav className="navbarHome">
      <div className="navbarContainer">

        
        <Link href="/" className="fastTrade">
          <img src={Logo} alt="FastTrade" />
        </Link>
        <SearchBar/>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-a">
              <img src={Home} alt="Home" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sell" className="nav-a">
              <img src={Sell} alt="Sell" />
            </Link>
          </li>
          <CartButton/>
          <li className="nav-item user">
            <Link to="/profile" className="nav-a">
              <img src={Profile} alt="Profile" />
            </Link>
          </li>

          {/* SingUp */}
          <li className="nav-item">
            <Link to="/signup" className="nav-a"> {/* Button to navigate to the signup page */}
              Signup
            </Link>
          </li>

          {/* SignIn */}
          <li className="nav-item">
            <Link to="/signin" className="nav-a"> {/* Button to navigate to the signin page */}
              Signin
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

