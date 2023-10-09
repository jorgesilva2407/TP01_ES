import React, { useState } from 'react';
import Hamburguer from '../icons/icons8-cardápio-50(1).png';
import '../styles/Dropdown.css';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu" onBlur={closeDropdown} tabIndex="0">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={Hamburguer} alt="Categorias" />
        <span className="dropdown-title">{title}</span>
      </button>
      <div className="dropdown-list-container">
        {isOpen && (
          <ul className="dropdown-list">
            {items.map((item, index) => (
              <li key={index} className="dropdown-item">
                <a href={item.link} className="dropdown-link">
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default DropdownMenu;
