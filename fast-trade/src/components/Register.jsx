import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./RegisterValidation";
import axios from 'axios';

import '../styles/Register.css';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState(null); // New state for backend error

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  
    if (errors.email === "" && errors.name === "" && errors.password === "") {

      const username = values.name;
      const secret = values.password;
      const email = values.email;
      const first_name = '';
      const last_name = '';

      try {

         // register the user in the API
        const r = await axios.post(
          "https://api.chatengine.io/users/",
          {username, secret, email, first_name, last_name}, // Body object
          {'headers': {"Private-Key": "b997bb5c-23c9-47bb-8b69-722c4a8d304b"}} // Headers object
        ).then((response) =>{
           console.log(response)})
        .catch((error) => console.log("Sign up error", error));
        
      
        // Step 1: Register the user in the backend
        await axios.post('http://localhost:3301/register', values)
        .then( response => {
          // If everything is successful, navigate to the login page
          navigate('/login');
        })
        .catch(err => {
          console.log(err)
        });

      } catch (error) {
        if (error.response && error.response.status === 500) {
          // Handle specific error status (e.g., email already used)
          setBackendError("Email already used. Please choose another email.");
        } else {

          // Handle other errors
          setBackendError("Registration failed. Please try again.");
          console.error("Registration failed:", error.message);
        }
      }
    }
  };
  

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Registre-se</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-section">
            <label htmlFor="name"><strong>Nome</strong></label>
            <input className="input-box" type="text" placeholder="Digite seu nome" name="name" onChange={handleInput} />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="input-section">
            <label htmlFor="email"><strong>Email</strong></label>
            <input className="input-box" type="email" placeholder="Digite seu email" name="email" onChange={handleInput} />
            {errors.email && <span className="text-danger">{errors.email}</span>}
            {backendError && <span className="text-danger">{backendError}</span>} {/* Display backend error */}
          </div>

          <div className="input-section">
            <label htmlFor="password"><strong>Senha</strong></label>
            <input className="input-box" type="password" placeholder="Digite sua senha" name="password" onChange={handleInput} />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button className="register-button" type="submit">Criar conta</button>

          <p>Já tem uma conta? </p>

          <Link to="/login">
            <button className="register-button">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;