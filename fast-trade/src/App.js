import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
import Signin from './components/SignIn';

function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
