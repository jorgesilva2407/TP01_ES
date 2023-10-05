function Validation(values) {

    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /.+/

    if(values.name === ""){
        error.name = "O nome deve ser preenchido"
    }

    else {
        error.name = ""
    }


    if(values.email === ""){
        error.email = "O email deve ser preenchido"
    }

    else if (!email_pattern.test(values.email)) {
        error.email = "Email inválido"
    }

    else {
        error.email = ""
    }

    
    if(values.password === ""){
        error.password = "A senha deve ser preenchido"
    }

    else if (!password_pattern.test(values.password)) {
        error.password = "Senha inválida"
    }

    else {
        error.password = ""
    }

    return error;
}

export default Validation;