import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserAccount from './components/UserAccount';
import Chat from './components/Chat';
import UserProfile from './components/UserProfile';
import Venda from './components/Venda';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';

function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user/:id" element={<UserAccount />} />
          <Route path="/myprofile" element={<UserProfile />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/venda" element={<Venda/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order-confirmation' element={<OrderConfirmation/>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
