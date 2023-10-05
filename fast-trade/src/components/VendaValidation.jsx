function Validation(values) {
    
    let error = {};


    if (values.product_name === "") {
      error.product_name = "O nome do produto é obrigatório.";
    }
    else {
      error.product_name = ""
    }
  
    if (values.quantity === "") {
      error.quantity = "A quantidade é obrigatória.";
    }
    else if(parseInt(values.quantity, 10) <= 0) {
      error.quantity = "Quantidade inválida.";
    }
    else {
      error.quantity = ""
    }

    if (values.category === "") {
      error.category = "O nome do produto é obrigatório.";
    }
    else {
      error.category = ""
    }
  
    if (values.description === "") {
      error.description = "A descrição do produto é obrigatória.";
    }
    
    else {
      error.description = ""
    }
  
    if (values.price === "") {
      error.price = "O preço é obrigatório.";
    }
    
    else {
      error.price = ""
    }
  
    return error;
  };

export default Validation;