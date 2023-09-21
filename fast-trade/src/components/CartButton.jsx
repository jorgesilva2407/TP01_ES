import React from 'react';

import "../styles/CartButton.css"
import Cart from "../icons/icons8-carrinho-de-compras-24.png";
import { Link } from 'react-router-dom';

function CartButton(){

    return(
        <form type="button" class="nav-item">
            <Link to="/cart" className="nav-a">
              <img src={Cart} alt="Cart" />
            </Link>
            <span className="cart-status">1</span>
        </form>
    )

}

export default CartButton;