import React, { useContext } from 'react';
import '../styles/Footer.css'
import Instagram from "../icons/icons8-instagram-50.png";
import Facebook from "../icons/icons8-facebook-50.png";
import Twitter from "../icons/icons8-twitter-50.png";
import Linkedin from "../icons/icons8-linkedin-50.png";
import Vasco from "../icons/icons8-vasco.png";
import {Link} from 'react-scroll';
import AppContext from '../context/AppContext';

const Footer = () => {
  const { setCategory } = useContext(AppContext);

  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Marketplace</h3>
          <ul>
            <li>
              <Link to="products" spy={true} smooth={true} offset={50} duration={500}>Explore</Link>
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
              <Link to="products" spy={true} smooth={true} offset={50} duration={500} onClick={() => setCategory("MLB1000")}>Eletrônicos</Link>
            </li>
            <li>
              <Link to="products" spy={true} smooth={true} offset={50} duration={500} onClick={() => setCategory("MLB5726")}>Eletrodomesticos</Link>
            </li>
            <li>
              <Link to="products" spy={true} smooth={true} offset={50} duration={500} onClick={() => setCategory("MLB1051")}>Celulares</Link>
            </li>
            <li>
              <Link to="products" spy={true} smooth={true} offset={50} duration={500} onClick={() => setCategory("MLB1743")}>Carros e Motos</Link>
            </li>
            <li>
              <Link to="products" spy={true} smooth={true} offset={50} duration={500} onClick={() => setCategory("MLB1574")}>Casa e Decoração</Link>
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
              Tel: <a>(21) 2176-7373</a>
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
                <a href="https://vasco.com.br/" target='_blank'>
                  <img src={Vasco} alt="Vasco" className='logo-midia'/>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h3>Inscreva-se para nossa Newsletter</h3>
          <input type="email" placeholder="calabouco@crvascodagama.com"/>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;