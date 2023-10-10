import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [category, setCategory] = useState("MLB1051");
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryDict, setCategoryDict] = useState([]);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    category,
    setCategory,
    query,
    setQuery,
    categories, 
    setCategories,
    categoryDict,
    setCategoryDict
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;