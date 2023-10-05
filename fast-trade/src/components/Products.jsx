import React, { useEffect, useContext, useState } from "react";
import '../styles/ItemGrid.css'; // Create this CSS file for styling
import '../styles/Products.css';
import { fetchProductsByCategory } from "../api/fetchProducts.js"
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import AppContext from "../context/AppContext";
import NextArrow from "../icons/icons8-arrow-next.png";
import PreviousArrow from "../icons/icons8-arrow-previous.png";
import Filter from "../icons/icons8-filtro-50.png"
import OrderBy from "../icons/icons8-ordenar-48.png"
import Categories from "../icons/icons8-cardápio-50(1).png"
import Price from "../icons/icons8-dólar-americano-24.png"

const Products = ({ itemsPerPage }) => {
    const { products, setProducts, loading, setLoading } = useContext(AppContext);
    const [productsSize, setProductsSize] = useState(0)
    const [pageNumber, setPageNumber] = useState(1);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("MLB1051");
    const [categoryDict, setCategoryDict] = useState([]);
    const [sortBy, setSortBy] = useState("relevance");
    const [isEmpty, setIsEmpty] = useState(true);
    // const [sortingMethods, setSortingMethods] = useState([]);
    const sortingMethods = [{id: "relevance", name: "Mais relevantes"},
                            {id: "price_asc", name: "Menor preço"},
                            {id: "price_desc", name: "Maior preço"}]
    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            try {
                let response;
                let productsResults;
                if (sortBy != "price_desc") {
                    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&&sort=${sortBy}`).then(response => response.json());
                    productsResults = response.results;
                }
                else {
                    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`).then(response => response.json());
                    productsResults = response.results.sort((a, b) => b.price - a.price);
                }
                if(productsResults) {
                    const filteredProducts = productsResults.filter(product => product.price >= minPrice && product.price <= maxPrice);
                    setProductsSize(filteredProducts.length);
                    const slicedProducts = filteredProducts.slice(0 + (pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
                    setProducts(slicedProducts);
                }
                else {
                    setIsEmpty(true);
                }
                response = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
                                .then(response =>  response.json())
                                .catch(error => {
                                    console.error('There has been a problem with your fetch operation:', error);
                                });
                setCategoryDict(response);
                setCategories(response.map(category => category.name));
                setLoading(false);
            } catch (error) {
                // Handle error, e.g., set loading to false and show an error message
                setLoading(false);
            }
        };

        fetchData();
    }, [itemsPerPage, pageNumber, minPrice, maxPrice, pageNumber, category, setLoading, setProducts, sortBy]);

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    }

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    }

    const handleCategoryChange = (category) => {
        const cat = categoryDict.find(cat => cat.name === category.target.value).id;
        setCategory(cat);
    }

    const handleSortChange = (sortMethod) => {
        const sortedM = sortMethod.target.value;
        if (sortedM) {
            const sortby = sortingMethods.find(sort => sort.name === sortedM).id;
            console.log(sortby);
            setSortBy(sortby);
        }
        else setSortBy("relevance");
    }

    function renderPaginationItems() {
        // Get the size of products
        const size = productsSize;
        // Create an array of numbers from 1 to size of products
        const length = Math.ceil(size / 16);
        console.log(size);
        const paginationItems = Array.from({ length: length }, (_, index) => index + 1);

        // Render pagination items (for demonstration, you can modify this part)
        return (
            <div className="pages">
                {paginationItems.map(item => (
                    <span key={item} className={`page ${item === pageNumber ? 'active' : ''}`} onClick={() => handlePageChange(item)}>
                        {item}
                    </span>
                ))}
            </div>
        );
    }

    return (
        <div className="products-container">
            <div className="side-menu">
                <div className="side-menu-filter">
                    <img className="filter-icon" src={Filter}/>
                    <h2>Filtros</h2>
                </div>
                <div className="filter-section">
                    <div className="side-menu-filter">
                        <img className="filter-icon" src={OrderBy}/>
                        <h3>Ordenar por</h3>
                    </div>
                    <select onChange={handleSortChange}>
                        {sortingMethods.map((sort, index) => (
                            <option key={index} value={sort.name} onChange={handleSortChange}>
                                {sort.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-section">
                    <div className="side-menu-filter">
                        <img className="filter-icon" src={Price}/>
                        <h3>Intervalo de Preço</h3>
                    </div>
                    <label className="price-input">
                        Preço Min: <input type="number" value={minPrice} onChange={handleMinPriceChange} />
                    </label>
                    <label className="price-input">
                        Preço Máx: <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
                    </label>
                </div>
                <div className="filter-section">
                    <div className="side-menu-filter">
                            <img className="filter-icon" src={Categories}/>
                            <h3>Categorias</h3>
                    </div>
                    <div className="categories-list">
                        {categories.map((cat, index) => (
                            <label>
                                <input type="radio" value={cat} checked={categoryDict.find(c => c.id === category).name === cat} onChange={handleCategoryChange} />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="item-grid">
                    {loading && products.map((product) => <Loading />)}
                    {!loading && products.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
                {!loading && (
                    <div className="pagination">
                        <button className="arrow" onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1}>
                            <img src={PreviousArrow} alt="Voltar" />
                        </button>
                        {renderPaginationItems()}
                        <button className="arrow" onClick={() => handlePageChange(pageNumber + 1)} disabled={products.length < itemsPerPage}>
                            <img src={NextArrow} alt="Próximo" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;





