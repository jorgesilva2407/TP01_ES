import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import '../styles/AccountInfo.css'
import EditIcon from "../icons/icons8-editar-32.png";

const AccountInfo = ({user}) => {
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function Validation(values) {
    
    let error = {};

    if (values.user_name === "") {
      error.user_name = "O nome é obrigatório.";
    }
    else {
      error.user_name = ""
    }
  
    if (values.user_email === "") {
        error.user_email = "O email é obrigatório.";
    }
    else {
        error.user_email = ""
    }
  
    return error;
  };

  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    username: user.username,
    banner: user.banner,
    profilepic: user.profilepic,
    phonenumber: user.phonenumber,
    description: user.description,
  });

  
  const user_id = localStorage.getItem("user_id")

  const [errors, setErrors] = useState({});


  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        console.log(values)
        if (errors.user_name === "" && errors.user_email === "") {
        
        // Assuming you have an endpoint for posting product announcements
        axios.put(`http://localhost:3301/update-user/${user_id}`, values)
            .then(res => {
                console.log("User information updated");
            })
            .catch(err => {
                console.error("Error updating user information:", err);
            });

            setEditing(false);
        }
        else
        console.log("Erro ao atualizar usuário")
    };

  return (
    <div className="account-info">
      <h2>Informações da Conta</h2>
      {isEditing ?
        <form action="" onSubmit={handleSubmit}>
            <div className="input-section">
                <label htmlFor="user_name"><strong>Nome</strong></label>
                <input className="input-box" type="text" placeholder="Digite seu nome" name="name" onChange={handleInput} />
                {errors.user_name && <span className="text-danger">{errors.user_name}</span>}
            </div>   
            <div className="input-section">
                <label htmlFor="user_email"><strong>Email</strong></label>
                <input className="input-box" type="text" placeholder="Digite seu email" name="email" onChange={handleInput} />
                {errors.user_email && <span className="text-danger">{errors.user_email}</span>}
            </div>
            <div className="input-section">
                <label htmlFor="user_username"><strong>Username</strong></label>
                <input className="input-box" type="text" placeholder="Digite seu username" name="username" onChange={handleInput} />
            </div>
            <div className="input-section">
                <label htmlFor="phonenumber"><strong>Telefone</strong></label>
                <input className="input-box" type="text" inputMode="decimal" step="0.01" maxlength="13" placeholder="Digite seu número de telefone" name="phonenumber" onChange={handleInput} />
            </div>
            <div className="input-section">
                <label htmlFor="description"><strong>Descrição</strong></label>
                <input className="input-box" type="text" inputMode="decimal" step="0.01" maxlength="13" placeholder="Digite a descrição do seu perfil/loja" name="description" onChange={handleInput} />
            </div>
            <div className="input-section">
                <label htmlFor="profilepic"><strong>Imagem de perfil:</strong></label>
                <input className="image-picker" type="file" accept="image/*" name="profilepic" onChange={handleInput} />
            </div>
            <div className="input-section">
                <label htmlFor="banner"><strong>Banner do perfil:</strong></label>
                <input className="image-picker" type="file" accept="image/*" name="banner" onChange={handleInput} />
            </div>
        </form>
        : 
        <div>
            <p>Nome: {capitalizeFirstLetter(user.name)}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Telefone: {user.phonenumber}</p>
            <p>Descrição: {user.description}</p>
        </div>
        }
        {isEditing ? 
        <div className='edit-buttons'>
          <button className='editInfo-buttom' onClick={handleSubmit}>
            <img src={EditIcon}/>Salvar Informações
          </button>
          <button className='editInfo-buttom-cancel' onClick={handleEditClick}>
            Cancelar
          </button> 
        </div>
        : 
        <button className='editInfo-buttom' onClick={handleEditClick}>
          <img src={EditIcon}/>Editar Informações
        </button>
        }
    </div>
  );
};

export default AccountInfo;