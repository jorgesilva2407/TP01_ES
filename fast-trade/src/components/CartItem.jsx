import React, { useContext, useState, useEffect} from "react";
import propTypes from 'prop-types';
import "../styles/CartItem.css"
import AppContext from "../context/AppContext";

function CartItem({data}){
    const { cartItems, setCartItems } = useContext(AppContext);
    const { id, thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updateItems);
    };

    return (
        <section className="cart-item">
            <img src={thumbnail} alt="imagem" className="cart-item-image"/>
            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',

                })}</h3>
                <button type="button"
                className="button__remove-item"
                onClick={handleRemoveItem}
                >-</button>
            </div>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
  }.isRequired;