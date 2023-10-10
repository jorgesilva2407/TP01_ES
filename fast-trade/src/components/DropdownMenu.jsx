import React, { useState, useEffect, useRef, useContext } from 'react';
import Hamburguer from '../icons/icons8-cardápio-50(1).png';
import AppContext from "../context/AppContext";
import {Link} from 'react-scroll';
import '../styles/Dropdown.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setCategory, categoryDict } = useContext(AppContext);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown-menu" tabIndex="0" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={Hamburguer} alt="Categorias" />
        <span className="dropdown-title">Categorias</span>
      </button>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {categoryDict.map((category, index) => (
              <li key={category.name} className="dropdown-item">
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="dropdown-link"
                  onClick={(event) => {
                    event.stopPropagation();
                    setCategory(category.id);
                    closeDropdown();
                  }}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default DropdownMenu;
