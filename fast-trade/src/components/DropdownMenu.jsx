import React, { useState } from 'react';

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
        {title}
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
      </button>
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
  );
};

export default DropdownMenu;
