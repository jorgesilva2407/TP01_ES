import React, {useEffect, useContext} from "react";
import '../styles/ItemGrid.css'; // Create this CSS file for styling
import '../styles/Products.css';
import fetchProducts from "../api/fetchProducts"
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import AppContext from "../context/AppContext";
function Products(){

    const {products, setProducts, loading, setLoading} = useContext(AppContext);
    useEffect(() => {
        fetchProducts('iphone').then((response) =>{
            setProducts(response)
            setLoading(false)
        });
    }, [])

    return(
        (loading && <Loading/> ) || (
         <div className="item-grid">
            {products.map( (product) => <ProductCard key={product.id} data ={product}/>)}
         </div>)
    );
}

export default Products;