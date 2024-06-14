import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./SignupValidation";
function Signup(){
    const [values, setValues] = useState({ 
        username: '',
        email: '' , 
        password: '' 
    })
    const [errors, setErrors] = useState({})

    

    const handleInput = (event) =>{
        setValues(prev =>({...prev, [event.target.name] : [event.target.value]}))
    }

    const navigate = useNavigate();
    //const random= true;
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        console.log(errors.username);
        console.log(errors.email);
        console.log(errors.password);
        if(errors.username === "" && errors.email === "" && errors.password === ""){
            console.log("entered into axion code")
        axios.post('http://localhost:8081/signup', values)
        .then( res => {
            navigate('/');
        })
        .catch(err => console.log(err));
        console.log(values);
    }
    }

    

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="usernamename"><strong>UserName</strong></label>
                    <input type="text" placeholder="Enter Name" name='username'
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.username && <span className="text-danger">{errors.username}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input  type="email" placeholder="Enter Email" name='email'
                     onChange={handleInput} className="form-control rounded-0"/>
                     {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input  type="password" placeholder="Enter Password" name='password'
                    onChange={handleInput} className="form-control rounded-0"/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <button type='submit' className="btn btn-success w-100"><strong>Sign Up</strong></button>
                <p></p>
                <Link to="/" className="btn btn-default border w-100 bg-light"><strong>Login</strong></Link>
            </form>

        </div>
        
    </div>
    );
}

export default Signup;