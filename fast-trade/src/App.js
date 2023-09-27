import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';


function App() {


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
