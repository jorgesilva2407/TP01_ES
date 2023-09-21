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
    <nav className="browse-category-navbar">
      <div className="browse-navbarContainer">
        <ul className="browse-navbar-nav">
          <li className="dropdown">
            <div className="browse-nav-dropdown">
              <DropdownMenu title="Categorias" items={categories} />
            </div>
          </li>
          <li className="browse-nav-item">
            <a href="/ofertasdodia" className="browse-nav-a">
              Ofertas do Dia
            </a>
          </li>
          <li className="browse-nav-item">
            <a href="/maisprocurados" className="browse-nav-a">
              Mais Procurados
            </a>
          </li>
          <li className="browse-nav-item">
            <a href="/recomendacoes" className="browse-nav-a">
              Recomendações para você!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
