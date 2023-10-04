import React, {useEffect, useContext, useState} from "react";
import '../styles/ItemGrid.css'; // Create this CSS file for styling
import '../styles/Products.css';
import { fetchProductsByCategory, fetchProducts } from "../api/fetchProducts.js"
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import AppContext from "../context/AppContext";
import NextArrow from "../icons/icons8-arrow-next.png";
import PreviousArrow from "../icons/icons8-arrow-previous.png";

const Products = ({ query, itemsPerPage, byCategory }) => {
    const { products, setProducts, loading, setLoading } = useContext(AppContext);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = byCategory
                    ? await fetchProductsByCategory(query, itemsPerPage, pageNumber)
                    : await fetchProducts(query, itemsPerPage, pageNumber);

                setProducts(response);
                setLoading(false);
            } catch (error) {
                // Handle error, e.g., set loading to false and show an error message
                setLoading(false);
            }
        };

        fetchData();
    }, [query, itemsPerPage, pageNumber, setLoading, setProducts, byCategory]);

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };

    function renderPaginationItems() {
        // Get the size of products
        const size = products.length;
        // Create an array of numbers from 1 to size of products
        const length = Math.min(size - pageNumber + 1, 5);
        const start = pageNumber > 2 ? pageNumber - 2 : pageNumber;
        const paginationItems = Array.from({ length: length }, (_, index) => index + start);
        
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
        <div>
            {loading && <Loading />}
            {!loading && (
                <div className="container">
                    <div className="item-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                    </div>
                    {!loading && (
                    <div className="pagination">
                        <button className="arrow" onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1}>
                            <img src={PreviousArrow} alt="Voltar"/>
                        </button>
                        {renderPaginationItems()}
                        <button className="arrow" onClick={() => handlePageChange(pageNumber + 1)} disabled={products.length < itemsPerPage}>
                            <img src={NextArrow} alt="Próximo"/>
                        </button>
                    </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;





