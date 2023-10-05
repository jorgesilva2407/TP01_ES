import React, { useContext, useState, useEffect} from "react";

import "../styles/Cart.css"
import CartItem from "./CartItem";
import AppContext from "../context/AppContext";

function Cart(){
    const {cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // Ativar o botão se o carrinho tiver itens
        setIsButtonDisabled(cartItems.length === 0);
    }, [cartItems]);

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleBuy = () => {
        window.location.href = "/test";
    };

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}                            
            </div>
            <div className="close-button" id="close-cart" onClick={toggleCart}>
                x
            </div>
            <div className="cart-resume">Total: {totalPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
            })}</div>
            <div>
                <button type="button" className="button__cart" disabled={isButtonDisabled}
                    onClick={handleBuy}>
                    <i className="bi bi-cart-fill"></i>
                    <span>Comprar</span>
                </button>

            </div>


        </section>
    );
}

export default Cart;
