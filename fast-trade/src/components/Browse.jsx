import React from 'react';
import DropdownMenu from './DropdownMenu';
import '../styles/Browse.css';

const CategoryNavbar = () => {
  const categories = [
    { label: 'Electronics', link: '/products/electronics' },
    { label: 'Clothing', link: '/products/clothing' },
    // Add more categories here
  ];

  return (
    <nav className="category-navbar">
      <DropdownMenu title="Categories" items={categories} />
      <div className="navbarContainer">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/ofertasdodia" className="nav-a">
              Ofertas do Dia
            </a>
          </li>
          <li className="nav-item">
            <a href="/maisprocurados" className="nav-a">
              Mais Procurados
            </a>
          </li>
          <li className="nav-item">
            <a href="/recomendacoes" className="nav-a">
              Recomendações para você!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
