import { React, useState } from "react";
import Validation from './LoginValidation';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/Login.css';

function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const handleSubmit =  async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    // Início da autenticação para o uso do chat
    const authObject = {
      'Project-ID': 'd392b8ec-9c28-4780-a064-94a5ad330a52',
      'User-Name': values.email,
      'User-Secret': values.password
    }

    try {
      axios.get('https://api.chatengine.io/chats', {headers: authObject});
      
      localStorage.setItem('username', values.email);
      localStorage.setItem('password', values.password);
      
      window.location.reload();
    } catch (error) {
      setErrors('Falha na validação de usuário')
    }
    // Fim da autenticação para o uso do chat
  }

  return (

    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-section">
            <label htmlFor="email">Email</label>
            <input className="input-box" type="email" placeholder="Digite seu email" name="email" onChange={handleInput} />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="input-section">
            <label htmlFor="password">Senha</label>
            <input className="input-box" type="password" placeholder="Digite sua senha" onChange={handleInput} name="password" />
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