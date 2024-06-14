import React, { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function Login(){
    //const inputRef = useRef(null);
    const [values, setValues] = useState({ 
        email: '' , 
        password: '' 
    })
    const [errors, setErrors] = useState({})

    

    const handleInput = (event) =>{
        setValues(prev =>({...prev, [event.target.name] : [event.target.value]}))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        //inputRef.current.value = '';
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            console.log("entered into axion code")
        axios.post('http://localhost:8081/login', values)
        .then( res => {
            console.log(res.data);
            if (res.data === "Success"){
                navigate('/profile');
            }
            else {
                alert("No record exists!");
            }
            
        })
        .catch(err => console.log(err));
        //console.log(values);
    }
    
    }

    return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type= "email" placeholder='Enter Email' name='email' 
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' 
                    onChange={handleInput} className="form-control rounded-0" />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <button type='submit' className="btn btn-success w-100"><strong>Login</strong></button>
                <p></p>
                <Link to="/signup"  className="btn btn-default border w-100 bg-light"><strong>Register</strong></Link>
            </form>

        </div>
        
    </div>
    );

}

export default Login;