import React, { useContext, useState } from "react";

import AppContext from "../context/AppContext";
import "../styles/Checkout.css";

import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer"

const Checkout = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [CEP, setCEP] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  // if (!localStorage.getItem('username')) return <Login />

  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const name_pattern = /^[A-Za-z\s'-]+$/;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCEPChange = (e) => {
    setCEP(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    const paymentMethod = event.target.value;

    switch (paymentMethod) {
      case "credit_card":
        setPaymentMethod("credit_card");
        break;
      case "pix":
        setPaymentMethod("pix");
        break;
      case "bank_transfer":
        setPaymentMethod("bank_transfer");
        break;
      case "paypal":
        setPaymentMethod("paypal");
        break;
      default:
        setPaymentMethod("credit_card");
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Limpa os campos após o envio
    setPaymentMethod("credit_card");
  };

  return (
    <div>
      <Header />
      <div className="checkout-container">
        <div className="title">Finalização da Compra</div>
        <form onSubmit={handleSubmit}>
          <div className="dados-pessoais">
            <h2>Dados Pessoais</h2>

            <div className="form-group">
              <label htmlFor="name">Nome: </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Insira seu nome"
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                placeholder="Insira seu sobrenome"
                onChange={handleLastNameChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Insira seu e-mail"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={phoneNumber}
                placeholder="Insira seu telefone"
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={CEP}
                placeholder="Insira seu CEP"
                onChange={handleCEPChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={city}
                placeholder="Insira sua cidade"
                onChange={handleCityChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={state}
                placeholder="Insira seu estado"
                onChange={handleStateChange}
                required
              />
            </div>

          </div>
          <div className="dados-pessoais">
            <h2>Forma de Pagamento</h2>
            <div className="form-group">
              <label htmlFor="paymentMethod">Forma de Pagamento:</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="credit_card">Cartão de Crédito</option>
                <option value="pix">Pix</option>
                <option value="bank_transfer">Transferência Bancária</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            {paymentMethod === 'credit_card' && (
              <div className="form-group">
                <label htmlFor="cardNumber">Número do Cartão:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Insira o número do cartão"
                />

                <label htmlFor="expirationDate">Data de Expiração:</label>
                <input
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="Insira a data de expiração"
                />

                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="Insira o CVV"
                />
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="form-group">
                <label htmlFor="paypalEmail">E-mail do PayPal:</label>
                <input
                  type="email"
                  id="paypalEmail"
                  placeholder="Digite o e-mail do PayPal"
                />
              </div>
            )}

            {paymentMethod === 'pix' && (
              <div className="form-group">
                O código expira 5 minutos após a confirmação da compra
              </div>
            )}

            {paymentMethod === 'bank_transfer' && (
              <div className="form-group">
                O pagamento pode demorar até 3 dias úteis para ser aprovado.
              </div>
            )}

          </div>
          <button type="submit" className="order__button">Realizar Pedido</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;