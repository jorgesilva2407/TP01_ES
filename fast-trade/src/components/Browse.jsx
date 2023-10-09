import React from 'react';
import DropdownMenu from './DropdownMenu';
import {Link} from 'react-scroll';
import '../styles/Browse.css';

const CategoryNavbar = () => {
  return (
    <nav className="browse-category-navbar">
      <div className="browse-navbarContainer">
        <ul className="browse-navbar-nav">
          <li className="dropdown">
            <div className="browse-nav-dropdown">
              <DropdownMenu />
            </div>
          </li>
          <li className="browse-nav-item">
            <Link to="products" spy={true} smooth={true} offset={50} duration={500} className="browse-nav-a">
              Ofertas do Dia
            </Link>
          </li>
          <li className="browse-nav-item">
            <Link to="products" spy={true} smooth={true} offset={50} duration={500} className="browse-nav-a">
              Mais Procurados
            </Link>
          </li>
          <li className="browse-nav-item">
            <Link to="products" spy={true} smooth={true} offset={50} duration={500} className="browse-nav-a">
              Recomendações para você!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
