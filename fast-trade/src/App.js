import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Chat from './components/Chat';

function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/chat" element={<Chat/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
