import React, { useState } from 'react'
import './RegistrationPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

const RegistrationPage = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        if(name === "" || email === "" || password === "") {
            alert("Required fields are mandatory");
            return;
        }

        const user = {
            name,email,password
        }
        try {
            const response = await registerUser(user);
            console.log(response.data);
            alert("Registration Succesfull");
            navigate("/login");
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        }
    }
    return (
        <div className='register'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                type='text'
                value={name}
                placeholder='Name'
                required
                onChange={(e)=> setName(e.target.value)}/>


                <input
                type='text'
                value={email}
                placeholder='Email'
                required
                onChange={(e)=> setEmail(e.target.value)}/>


                <input
                type='text'
                value={password}
                placeholder='Password'
                required
                onChange={(e)=> setPassword(e.target.value)}/>

                <button type='Submit'>Sign Up</button>
                <p>Already have an account?
                    <Link to='/Login'>  Sign in</Link>
                </p>
            </form>
        </div>
    )
}

export default RegistrationPage
