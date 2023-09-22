import React, { useState, useContext } from 'react';
import '../styles/SearchBar.css';
import Browse from "../icons/icons8-pesquisar-escuro.png"
import fetchProducts from '../api/fetchProducts';
import AppContext from '../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
