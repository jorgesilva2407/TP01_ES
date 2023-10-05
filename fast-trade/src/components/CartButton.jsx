import React, { useContext } from 'react';

import "../styles/CartButton.css"
import Cart from "../icons/icons8-carrinho-de-compras-24.png";
import AppContext from '../context/AppContext';

function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

    return (
        <button class="nav-item"
            onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <img src={Cart} alt="Cart" />
            {cartItems.length > 0 &&
                <span className="cart-status">{cartItems.length}</span>}
        </button>
    )

}

export default CartButton;