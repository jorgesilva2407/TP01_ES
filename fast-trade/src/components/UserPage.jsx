import React, { useState, useEffect} from 'react';
import '../styles/UserPage.css';
import DefaultUserBanner from "../images/UserBanner2.png";
import EditIcon from "../icons/icons8-editar-32.png";
import Products from './Products';
import {Link} from "react-router-dom";
import axios from 'axios';


const UserPage = () => {



  const user = {
    name: localStorage.getItem("name"),
    username: 'johndoe',
    email: localStorage.getItem("email"),
    profilePicture: 'https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.webp', // Replace with the URL to the user's profile picture
    storeDescription: "Bem-vindo à Loja de John Doe no Nosso Marketplace! Aqui, você encontrará uma coleção \
                       diversificada de produtos artesanais feitos com paixão e habilidade. Desde pinturas e \
                       joias feitas à mão até decorações para o lar, cada item conta uma história única. \
                       Comprometidos com a sustentabilidade, muitos de nossos produtos são feitos a partir \
                       de materiais reciclados, refletindo nossa preocupação com o meio ambiente. Oferecemos \
                       personalização para criar peças verdadeiramente exclusivas e nosso excepcional atendimento \
                       ao cliente garante uma experiência de compra perfeita. Descubra o mundo encantador do \
                       artesanato autêntico na Loja de John Doe, onde cada compra é uma celebração da criatividade e autenticidade."

  };


  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("user_id"); 

  useEffect(() => {
    // Fetch user's products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3301/user-products/${userId}`);
        setProducts(response.data);
        console.log("Products fetched");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [userId]);


  return (
    <div className="user-page">
      <div className="banner">
        <img src={DefaultUserBanner} />
        <div className="profile-picture" style={{ backgroundImage: `url(${user.profilePicture})` }}></div>
      </div>
      <div className='presentation-info'>
        <div>
          <h2 className='user-name'>{user.name}</h2>
          <span className='user-username'>@{user.username}</span>
        </div>
        <button className='editInfo-buttom'>
          <img src={EditIcon}/>Edit Profile
        </button>

        {/* Adicionar produtos */}
        <Link to="/venda">
          <button className='add-product-button'>Adicionar produto</button>
        </Link>
      </div>

      <div className="user-info">
        <div className="user-description">
          <h2 className="store-name">Sobre {user.name}</h2>
          <p className="store-description">{user.storeDescription}</p>
        </div>
        <div className="user-store">
          <h2 className="store-name">Produtos de {user.name}</h2>
          <Products/>
            

        </div>
      </div>
    </div>
  );
};

export default UserPage;
