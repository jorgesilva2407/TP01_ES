import React from 'react';
import '../styles/Footer.css'
import Instagram from "../icons/icons8-instagram-50.png";
import Facebook from "../icons/icons8-facebook-50.png";
import Twitter from "../icons/icons8-twitter-50.png";
import Linkedin from "../icons/icons8-linkedin-50.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Marketplace</h3>
          <ul>
            <li>
              <a href='/maisprocurados'>Explore</a>
            </li>
            <li>
              <a href='/venda'>Venda</a>
            </li>
            <li>
              <a href='/venda'>Anuncie</a>
            </li>
            <li>
              <a href='/vendedores'>Vendedores</a>
            </li>
            <li>
              <a href='/'>Comunidade</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Departamentos</h3>
          <ul>
            <li>
              <a>Eletrônicos</a>
            </li>
            <li>
              <a>Eletrodomesticos</a>
            </li>
            <li>
              <a>Celulares</a>
            </li>
            <li>
              <a>Peças de automóveis</a>
            </li>
            <li>
              <a>Items para cozinha</a>
            </li>
            <li>
              <a>Serviços</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Institucional</h3>
          <ul>
            <li>
              <a>Sobre a FastTrade</a>
            </li>
            <li>
              <a>Políticas do Site e Marketplace</a>
            </li>
            <li>
              <a>Políticas de Cookies</a>
            </li>
            <li>
              <a>Políticas de Privacidade</a>
            </li>
            <li>
              <a>Trabalhe Conosco</a>
            </li>
            <li>
              <a>Código de Defesa do Consumidor</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contato</h3>
          <ul>
            <li>
              Email: <a> fast.trade.ufmg@gmail.com</a>
            </li>
            <li>
              Tel: <a>(31) 99999-9999</a>
            </li>
            <li className='midiasSociais'>
              Mídias Sociais:
              <div className='midias-logos'>
                <a href="https://www.instagram.com/vascodagama/" target='_blank'>
                  <img src={Instagram} alt="instagram" className='logo-midia'/>
                </a>
                <a href="https://www.facebook.com/vascodagama/" target='_blank'>
                  <img src={Facebook} alt="facebook" className='logo-midia'/>
                </a>
                <a href="https://twitter.com/VascodaGama" target='_blank'>
                  <img src={Twitter} alt="twitter" className='logo-midia'/>
                </a>
                <a href="https://www.linkedin.com/company/vasco-da-gama-saf/?originalSubdomain=br" target='_blank'>
                  <img src={Linkedin} alt="linkedin" className='logo-midia'/>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h3>Inscreva-se para nossa Newsletter</h3>
          <input type="email" placeholder="exemplo@email.com.br"/>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;