import React from 'react';
import './login.css';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();
    const userarrlist = useState(localStorage.getItem("userlists"));
    console.log(userarrlist)
    const [fields,setFields] = useState([]);
    const [errors,setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
        userarrlist.push({fields:fields}); 
        setFields([{fields:fields}]);
        localStorage.setItem("userlists",JSON.stringify(userarrlist));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log(fields);
    return (
        <>
            <div className="box">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h1>Create account</h1>
                    <h4 className='subtitle'>Already have an account?<Link to="/"> Sign In</Link></h4>
                    <input type="text" name="username" placeholder="Username"
                        value={fields.username} 
                        onChange={handleChange} />
                    <input type="text" name="firstname" placeholder="First Name"
                        value={fields.firstname}
                        onChange={handleChange} />
                    <input type="text" name="lastname" placeholder="Last Name"
                        value={fields.lastname}
                        onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password"
                        value={fields.password}
                        onChange={handleChange} />
                    <input type="password" name="conf_pass" placeholder="Confirm Password"
                        onChange={handleChange} />
                    <button type="submit" name="Login">Submit</button>
                    <p>I have read and agree to the <a href='#'>Terms of Service</a></p>
                </form>                
            </div>
        </>
    )
}

export default Register;