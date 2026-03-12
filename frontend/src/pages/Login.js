import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';

const Login = () => {

    const[email,setEmail] = useState([]);
    const[password,setPassword] = useState([]);

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({email,password});
            console.log(response)
            console.log(response.data)
            const token = response.data.token
            const role = response.data.role
            localStorage.setItem("token", token);
            localStorage.setItem("role",role)
            window.dispatchEvent(new Event("authChanged"))
            if (role === "ADMIN") {
                navigate("/admin")
            } else {
                navigate("/")
            }
        } catch (error) {
            alert("Invalid Login")
        }
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                type='Email'
                value={email}
                placeholder='Email'
                required
                onChange={(e) => {setEmail(e.target.value)}}
                />

                <input
                type='Password'
                value={password}
                placeholder='Password'
                required
                onChange={(e) => {setPassword(e.target.value)}}
                />

                <button type='Submit'>Login</button>
                <p>Don't have an account
                    <Link to='/register'>  Register</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
