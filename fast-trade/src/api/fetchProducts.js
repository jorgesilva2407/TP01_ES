const fetchProducts = async (query, itemsPerPage, pageNumber) => {
  const offset = (pageNumber - 1) * itemsPerPage; // Calculate the offset based on page number
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();

  return data.results;
};

const fetchProductsByCategory = async (query, itemsPerPage, pageNumber) => {
  const offset = (pageNumber - 1) * itemsPerPage; // Calculate the offset based on page number
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${query}`);
  const data = await response.json();

  return data.results;
};
  
export {fetchProducts, fetchProductsByCategory} ;