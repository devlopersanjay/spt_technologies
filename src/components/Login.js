import React from 'react';
import './login.css';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import arrData from './arrayData';

const Login = () => {

    const navigate = useNavigate();

    const [username,setUsername] = useState(''); 
    const [password,setPassword] = useState(''); 
    let errorsObj = {  errusername : '', errpassword : '' };
    const [errors, setErrors] = useState(errorsObj);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let error = false;
        const errorObj = { ...errorsObj };
        if(username === ""){
            errorObj.errusername = "Username is Required";
            error = true;
        }
        if(password === ""){
            errorObj.errpassword = "password is Required";
            error = true;
        }

        setErrors(errorObj);

        if(!error){
            console.log(arrData);
            arrData.map((user)=> {
                if (user.username == username && user.password == password) {
                    localStorage.setItem("authusertoken",JSON.stringify(user));
                    navigate('/dashboard');
                    return true;
                }
            })
            
        }
    };

    return (
        <>
            <div className="box">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="text" name="username" placeholder="Username"
                    value={username} 
                    onChange={(e)=> setUsername(e.target.value) } />
                    {errors.errusername && <span style={{color : "red"}}>{errors.errusername}</span>}
                    <input type="password" name="password" placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value) } />
                    {errors.errpassword && <span style={{color : "red"}}>{errors.errpassword}</span>}
                    <button type="submit" name="Login">Login</button>
                    <div className="links">
                        <p>Don't have account Please <Link to="/register">Sign Up</Link></p>
                    </div>
                </form>                
            </div>
        </>
    )
}

export default Login;