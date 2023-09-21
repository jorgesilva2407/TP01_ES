import React, {useState, useEffect} from "react";
import '../styles/ItemGrid.css'; // Create this CSS file for styling
import '../styles/Products.css';
import fetchProducts from "../api/fetchProducts"
import ProductCard from "./ProductCard";
function Products(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('iphone').then((response) =>{
            setProducts(response)
        });
    }, [])

    return(
        <div className="item-grid">
            {
                products.map( (product) => <ProductCard key={product.id} data ={product}/>)
            }
        </div>
    );
}

export default Products;