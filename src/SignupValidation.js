function Validation(values){
    
    let error = {}
    //const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    console.log("Entered in Signup Validation");
    if (values.username === ""){
        error.username = "Name should not be empty"
    }
    else {
        error.username =""
        //console.log(error.username);
    }


    if (values.email === ""){
        error.email = "Email should not be empty"
    }
    else {
        error.email =""
    }

    if (values.password === ""){
        error.password = "Password should not be empty"
    }
    else {
        error.password =""
    }
    //console.log(error.username);
    //console.log(error.password);
    //console.log(error.email);
    return error;
}

export default Validation;