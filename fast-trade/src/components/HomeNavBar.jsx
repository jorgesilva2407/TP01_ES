import React from "react";
import '../styles/Navbar.css'
import SearchBar from "./SearchBar";
import Logo from "../icons/Logo_FT.svg";
import Home from "../icons/icons8-casa-24.png";
import Sell from "../icons/icons8-vender-30.png";
import Cart from "../icons/icons8-carrinho-de-compras-24.png";
import Profile from "../icons/icons8-usuário-homem-com-círculo-24.png";

const Navbar = ({ userIsLoggedIn, handleLogout }) =>  {
  return (
    <nav className="navbarHome">
      <div className="navbarContainer">
        <a href="/" className="fastTrade">
          <img src={Logo} alt="FastTrade" />
        </a>
        <SearchBar/>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/home" className="nav-a">
              <img src={Home} alt="Home" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/sell" className="nav-a">
              <img src={Sell} alt="Sell" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/cart" className="nav-a">
              <img src={Cart} alt="Cart" />
            </a>
          </li>
          <li className="nav-item user">
            <a href="/profile" className="nav-a">
              <img src={Profile} alt="Profile" />
            </a>
            {userIsLoggedIn && (
              <div className="userDetails">
                <span className="bemVindo">Bem vindo(a), Jane Doe!</span>
                <button onClick={handleLogout} className="logout">Logout</button>
              </div>
            )}
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

