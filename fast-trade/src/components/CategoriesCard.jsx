import React, { useContext } from 'react';
import Esportes from '../images/Esportes_card.png'
import Livros from '../images/Livros_card.png'
import Eletronicos from '../images/Eletronicos_card.png'
import {Link} from 'react-scroll';
import AppContext from '../context/AppContext';
import '../styles/CategoriesCard.css';

const CategoriesCard = () => {
    const { setCategory } = useContext(AppContext);

    return (
      <div className="categories-card-container">
        <div className="categories-card">
            <Link to="products" spy={true} smooth={true} offset={50} duration={500} className="categories-link" onClick={() => setCategory("MLB1276")}>
                <img className="categories-img" src={Esportes}/>
            </Link>
        </div>
        <div className="categories-card">
            <Link to="products" spy={true} smooth={true} offset={50} duration={500} className="categories-link" onClick={() => setCategory("MLB1196")}>
                <img className="categories-img" src={Livros}/>
            </Link>
        </div>
        <div className="categories-card">
            <Link to="products" spy={true} smooth={true} offset={50} duration={500} className="categories-link" onClick={() => setCategory("MLB1000")}>
                <img className="categories-img" src={Eletronicos}/>
            </Link>
        </div>
      </div>
    );
};

export default CategoriesCard;