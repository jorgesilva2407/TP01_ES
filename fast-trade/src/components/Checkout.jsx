import React, { useContext, useState } from "react";

import AppContext from "../context/AppContext";
import "../styles/Checkout.css";

import Login from "./Login";
import Header from "./Header";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  // if (!localStorage.getItem('username')) return <Login />

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para processar o pedido e enviar as informações do checkout para o servidor, incluindo o método de pagamento selecionado

    // Limpa os campos após o envio
    setName("");
    setEmail("");
    setAddress("");
    setPaymentMethod("credit_card");
  };

  return (
    <div className="checkout-container">
      <Header />
      <div>
        <h2>Finalização de Compra</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Endereço de Entrega:</label>
            <textarea
              id="address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Forma de Pagamento:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="credit_card">Cartão de Crédito</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Transferência Bancária</option>
            </select>
          </div>
          <button type="submit">Finalizar Compra</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
