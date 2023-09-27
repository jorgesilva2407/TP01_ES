import {React, useState} from "react";
import Validation from './LoginValidation';
import {Link} from "react-router-dom";
import '../styles/Login.css';

function Login() {

    const [values, setValues] = useState({
      email: '',
      password: ''
    }) 

    const [errors,setErrors] = useState({})

    const handleInput = (event) => {
      setValues( prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
    }

  return (

      <div className="login-page">
        <div className="login-box">
          <h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="input-section">
              <label htmlFor="email">Email</label>
              <input className="input-box" type="email" placeholder="Digite seu email" name="email" onChange={handleInput}/>
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>

          <div className="input-section">
              <label htmlFor="password">Senha</label>
              <input className="input-box" type="password" placeholder="Digite sua senha" onChange={handleInput} name="password"/>
              {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button className="login-button" type="submit">Login</button>
          
          <p>Não tem uma conta? Crie uma agora</p>

          <Link to="/register">
            <button className="login-button">Registre-se</button>
          </Link>
          
          </form>

          
        </div>
      </div>

    )

}

export default Login