import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserAccount from './components/UserAccount';
import Chat from './components/Chat';
<<<<<<< HEAD
import Venda from './components/Venda';
=======
import Checkout from './components/Checkout';
>>>>>>> edf20f23ce63ce5b38404863335965e16a0c6375

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
<<<<<<< HEAD
          <Route path="/venda" element={<Venda/>} />
          
=======
          <Route path='/checkout' element={<Checkout/>}/>
>>>>>>> edf20f23ce63ce5b38404863335965e16a0c6375

        </Routes>
      </Router>

    </div>
  );
}

export default App;
