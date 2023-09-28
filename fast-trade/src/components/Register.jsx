import {React, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Validation from "./RegisterValidation";
import axios from 'axios';
import '../styles/Register.css';


function Register(){

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  }) 

  const [errors,setErrors] = useState({})

  const handleInput = (event) => {
    setValues( prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if(errors.email === "" && errors.name === "" && errors.password === "") {
      axios.post('http://localhost:3301/register', values)
      .then( res => {
          navigate('/login');
      })
      .catch(err => console.log(err));
    }

  }

  return(
    <div className="register-page">
        <div className="register-box">
          <h2>Registre-se</h2>
          <form action="" onSubmit={handleSubmit}>

            <div className="input-section">
              <label htmlFor="name"><strong>Nome</strong></label>
              <input className="input-box" type="text" placeholder="Digite seu nome" name="name" onChange={handleInput}/>
              {errors.name && <span className="text-danger">{errors.name}</span>}

            </div>

            <div className="input-section">
              
              <label htmlFor="email"><strong>Email</strong></label>
              <input className="input-box" type="email" placeholder="Digite seu email" name="email" onChange={handleInput}/>
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>

          <div className="input-section">
              <label htmlFor="password"><strong>Senha</strong></label>
              <input className="input-box" type="password" placeholder="Digite sua senha" name="password" onChange={handleInput}/>
              {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button className="register-button" type="submit">Criar conta</button>

          <p>Já tem uma conta? </p>

          <Link  to="/login">
            <button className="register-button">Login</button>
          </Link>

          </form>
        </div>
      </div>
  )
}

export default Register