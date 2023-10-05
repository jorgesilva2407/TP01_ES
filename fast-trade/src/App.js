import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserAccount from './components/UserAccount';
import Chat from './components/Chat';
import Venda from './components/Venda';

function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/minhaconta" element={<UserAccount/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/venda" element={<Venda/>} />
          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
