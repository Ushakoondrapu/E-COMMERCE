import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const[email,setEmail] = useState([]);
    const[password,setPassword] = useState([]);

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login Successful");
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                type='Email'
                value={email}
                placeholder='Email'
                onChange={(e) => {setEmail(e.target.value)}}
                />

                <input
                type='Password'
                value={password}
                placeholder='Password'
                onChange={(e) => {setPassword(e.target.value)}}
                />

                <button type='Submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
