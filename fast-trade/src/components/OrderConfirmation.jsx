import React, { useContext, useState } from "react";

import '../styles/OrderConfirmation.css';
import check from "../icons/icons8-check-100.png";
import truck from "../icons/icons8-truck.gif";
import Header from "./Header";
import Footer from "./Footer";

function OrderConfirmation() {
    return (
        <div>
            <Header />
            <div className="thank-you-page">
                <img src={check} className="check" />
                <img src={truck} className="truck" />
                <div className="order-container">
                    <div className="content">
                        <h1>Compra realizada com sucesso!</h1>
                        <p>Seu pedido foi recebido com sucesso.</p>
                        <p>Você receberá um e-mail de confirmação em breve.</p>
                        <p>Enquanto isso, confira nosso <a href="/">catálogo</a> para mais produtos.</p>
                        <p>Obrigado pela preferência!</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderConfirmation;