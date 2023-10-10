// Venda.jsx

import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Validation from "./VendaValidation";

import '../styles/Venda.css';

function Venda() {


  const [values, setValues] = useState({
    
    quantity: '',
    product_owner_id: '',
    product_name: '',
    description: '',
    price: '',
    image: null,
    category: ''

  });

  
const categories = [
  "Acessórios para Veículos",
  "Agro",
  "Alimentos e Bebidas",
  "Animais",
  "Antiguidades e Coleções",
  "Arte, Papelaria e Armarinho",
  "Bebês",
  "Beleza e Cuidado Pessoal",
  "Brinquedos e Hobbies",
  "Calçados, Roupas e Bolsas",
  "Câmeras e Acessórios",
  "Carros, Motos e Outros",
  "Casa, Móveis e Decoração",
  "Celulares e Telefones",
  "Construção",
  "Eletrodomésticos",
  "Eletrônicos, Áudio e Vídeo",
  "Esportes e Fitness",
  "Ferramentas",
  "Festas e Lembrancinhas",
  "Games",
  "Imóveis",
  "Indústria e Comércio",
  "Informática",
  "Ingressos",
  "Instrumentos Musicais",
  "Joias e Relógios",
  "Livros, Revistas e Comics",
  "Música, Filmes e Seriados",
  "Saúde",
  "Serviços",
  "Mais Categorias"
];


  values.product_owner_id = localStorage.getItem("user_id")

  const navigate= useNavigate();

  const [errors, setErrors] = useState({});


  const handleInput = (event) => {

  
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));

    //  // For the file input
    //  if (event.target.name === 'image') {
    //   setValues(prev => ({ ...prev, image: event.target.files[0] }));
    // }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    console.log(values)
    

    if (errors.product_name === "" && errors.description === "" && errors.price === ""
    && errors.quantity === "") {
      
      // Assuming you have an endpoint for posting product announcements
      axios.post('http://localhost:3301/announce-product', values
      )
        .then(res => {
          // Handle successful product announcement
          console.log("Product announced successfully");
        })
        .catch(err => {
          // Handle errors
          console.error("Error announcing product:", err);
        });

        navigate('/myprofile');
    }
    else
      console.log("Erro ao adicionar produto")
  };

  return (
    <div className="venda-page">
      <div className="venda-box">
        <h2>Anuncie seu Produto</h2>
        <form action="" onSubmit={handleSubmit}>
          
          <div className="input-section">
            <label htmlFor="product_name"><strong>Nome do Produto</strong></label>
            <input className="input-box" type="text" placeholder="Digite o nome do seu produto" name="product_name" onChange={handleInput} />
            {errors.product_name && <span className="text-danger">{errors.product_name}</span>}
          </div>   
          
          <div className="input-section">
            <label htmlFor="quantity"><strong>Quantidade</strong></label>
            <input className="input-box" type="number" placeholder="Digite a quantidade disponível" name="quantity" onChange={handleInput} />
            {errors.quantity && <span className="text-danger">{errors.quantity}</span>}
          </div>

          <div className="input-section">
            <label htmlFor="category"><strong>Categoria</strong></label>
              <select className="input-box" name="category" onChange={handleInput}>
                <option value="">Selecione a categoria</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            {errors.category && <span className="text-danger">{errors.category}</span>}
          </div>
                 

          <div className="input-section">
            <label htmlFor="description"><strong>Descrição</strong></label>
            <textarea className="input-box" placeholder="Descreva seu produto" name="description" onChange={handleInput} />
            {errors.description && <span className="text-danger">{errors.description}</span>}
          </div>

          <div className="input-section">
            <label htmlFor="price"><strong>Preço</strong></label>
            
            <input className="input-box" type="text" inputMode="decimal" step="0.01"
            pattern="^\d+(\.\d{0,2})?$" placeholder="Digite o preço" name="price" onChange={handleInput} />
            {errors.price && <span className="text-danger">{errors.price}</span>}
          </div>

          <div className="input-section">
            <label htmlFor="image"><strong>Imagem do Produto</strong></label>
            <input className="image-picker" type="file" accept="image/*" name="image" onChange={handleInput} />
          </div>

          <button className="submit-button" type="submit">Anunciar Produto</button>
        
        
        </form>
      </div>
    </div>
  );
}

export default Venda;