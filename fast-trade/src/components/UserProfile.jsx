import React from "react";
import Browse from "./Browse";
import Navbar from "./HomeNavBar";
import Footer from "./Footer";
import Provider from "../context/Provider";
import EditProfile from "./EditProfile";
import Cart from "./Cart";

const UserAccount = () => {

  return (
    <Provider>
      <Navbar/>
      <Browse />
      <EditProfile/>
      <Cart/>
      <Footer />
    </Provider>
  );
};

export default UserAccount;
