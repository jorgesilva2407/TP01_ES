import React, { useState, useEffect } from 'react';
import '../styles/UserPage.css';
import DefaultUserBanner from "../images/UserBanner2.png";
import EditIcon from "../icons/icons8-editar-32.png";
import Products from './Products';

const UserPage = ( {userId} ) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    username: 'johndoe',
    banner: DefaultUserBanner,
    profilepic: 'https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.webp',
    phonenumber: '(31)999999999',
    description: "Bem-vindo à minha loja!", // Your store description here
  });
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3301/user/${userId}`).then(response => response.json());
        const userData = response.user[0];
        // console.log(response);
        setUser(userData); // Update the user state with the fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser(); // Call the async function
  }, [userId]);

  return (
    <div className="user-page">
      <div className="banner">
        <img src={user.banner} />
        <div className="profile-picture" style={{ backgroundImage: `url(${user.profilepic})` }}></div>
      </div>
      <div className='presentation-info'>
        <div>
          <h2 className='user-name'>{capitalizeFirstLetter(user.name)}</h2>
          <span className='user-username'>{user.username}</span>
        </div>
      </div>

      <div className="user-info">
        <div className="user-description">
          <h2 className="store-name">Sobre {user.name}</h2>
          <p className="store-description">{user.description}</p>
        </div>
        <div className="user-store">
          <h2 className="store-name">Produtos de {user.name}</h2>
          <Products itemsPerPage={8} pageNumber={1} byCategory={false}/>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
