import React, { useState } from 'react';
import Esportes from '../images/Esportes_card.png'
import Livros from '../images/Livros_card.png'
import Eletronicos from '../images/Eletronicos_card.png'
import '../styles/CategoriesCard.css';

const CategoriesCard = () => {

  return (
      <div className="categories-card-container">
        <div className="categories-card">
            <a className="categories-link">
                <img className="categories-img" src={Esportes}/>
            </a>
        </div>
        <div className="categories-card">
            <a className="categories-link">
                <img className="categories-img" src={Livros}/>
            </a>
        </div>
        <div className="categories-card">
            <a className="categories-link">
                <img className="categories-img" src={Eletronicos}/>
            </a>
        </div>
      </div>
  );
};

export default CategoriesCard;