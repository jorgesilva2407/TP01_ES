import React from "react";
import { useParams } from 'react-router-dom';
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import Provider from "../context/Provider";
import UserPage from "./UserPage";
import Cart from "./Cart";

const UserAccount = () => {
  const { id } = useParams();
  return (
    <Provider>
      <Navbar/>
      <Browse />
      <UserPage userId={id}/>
      <Cart/>
      <Footer />
    </Provider>
  );
};

export default UserAccount;
