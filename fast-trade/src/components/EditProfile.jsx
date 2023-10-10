import React, { useState, useEffect } from 'react';
import '../styles/EditProfile.css';
import DefaultUserBanner from "../images/UserBanner2.png";
import AccountInfo from './AccountInfo';
import OrderTracking from './OrderTracking';
import SalesTracking from './SalesTracking';

const EditProfile = () => {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const user_id = localStorage.getItem("user_id");
  const defaultProdilePic = 'https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.webp';

  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    username: `@${localStorage.getItem("name")}`,
    banner: DefaultUserBanner,
    profilepic: defaultProdilePic,
    phonenumber: '(31)999999999',
    description: "Bem-vindo à minha loja!", // Your store description here
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState('info'); // Default selected menu item

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'info':
        return <AccountInfo user={user}/>;
      case 'orders':
        return <OrderTracking user={user}/>;
      case 'sales':
        return <SalesTracking user={user}/>;
      default:
        return null;
    }
  };
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3301/user/${user_id}`).then(response => response.json());
        const userData = response.user[0];
        setUser(userData); // Update the user state with the fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser(); // Call the async function
  }, [user_id]);

  return (
    <div className="user-menu">
      <div className="banner">
        <img src={user.banner ? user.banner : DefaultUserBanner} />
        <div className="profile-picture" style={{ backgroundImage: `url(${user.profilepic ? user.profilepic : defaultProdilePic})` }}></div>
      </div>
      <div className='presentation-info'>
        <div>
          <h2 className='user-name'>{capitalizeFirstLetter(user.name)}</h2>
          <span className='user-username'>{user.username}</span>
        </div>
      </div>
      <div className="edit-user-info">
        <div className="edit-user-info-side">
          <ul className="user-menu-list">
            <li onClick={() => setSelectedMenuItem('info')}>Informações da Conta</li>
            <li onClick={() => setSelectedMenuItem('orders')}>Meus Pedidos</li>
            <li onClick={() => setSelectedMenuItem('sales')}>Minhas Vendas</li>
          </ul>
        </div>
        <div className="edit-user-info-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default EditProfile;
