import React, { useState } from 'react';
import '../styles/SearchBar.css';
import Browse from "../icons/icons8-pesquisar-escuro.png"

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Search..."
        className="search-input"
        onChange={ ({target}) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="search-button">
        <img src={Browse} alt="Buscar" />
      </button>
    </form>
  );
}

export default SearchBar;
