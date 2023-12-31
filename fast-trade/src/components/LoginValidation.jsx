function Validation(values) {

    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

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
        error.password = "A senha deve ser preenchida"
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