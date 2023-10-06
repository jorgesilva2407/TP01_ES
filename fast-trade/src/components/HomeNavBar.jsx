import React from "react";
import '../styles/Navbar.css'
import SearchBar from "./SearchBar";
import CartButton from "./CartButton"
import Logo from "../icons/Logo_FT.svg";
import Home from "../icons/icons8-casa-24.png";
import Cart from "../icons/icons8-carrinho-de-compras-24.png";
import Sell from "../icons/icons8-vender-24.png";
import Chat from "../icons/icons8-balão-de-fala-com-pontos-24.png";
import Profile from "../icons/icons8-usuário-homem-com-círculo-24.png";
import { Link, useNavigate} from 'react-router-dom';


const Navbar = () =>  {

  // Check if the user is logged in

 
  const isLoggedIn = localStorage.getItem('user_id');
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    if(!isLoggedIn){
      navigate('/login');
    }
    else{
      navigate(path);
    }
  };

  return (
    <nav className="navbarHome">
      <div className="navbarContainer">
        <a href="/" className="fastTrade">
          <img src={Logo} alt="FastTrade" />
        </a>

        <SearchBar/>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/'>
              <button className="nav-a">
                <img src={Home} alt="Home" />
              </button>
            </Link>
          </li>

          <li className="nav-item">
            <button onClick={() => handleButtonClick('/minhaconta')} className="nav-a">
              <img src={Sell} alt="Sell" />
            </button>
          </li>

          <CartButton/>

          <li className="nav-item chat">
            <button onClick={() => navigate('/chat')} className="nav-a">
              <img src={Chat} alt="Chat" />
            </button>
          </li>

          <li className="nav-item user">
            <button onClick={() => handleButtonClick('/profile')} className="nav-a">
              <img src={Profile} alt="Profile" />
            </button>
          </li>

          {isLoggedIn ? (
            <li className="nav-item">
              <button onClick={() => {
                localStorage.removeItem('user_id');
                navigate('/')
              }} className="nav-a">Logout</button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/register" className="nav-a">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-a">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

