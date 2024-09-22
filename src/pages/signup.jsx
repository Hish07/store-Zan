import React, { useState } from 'react'
import './signup.css';

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would typically make an API call to create the user
            console.log("Account created");
            navigate('/dashboard');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="name" className="heading">
                    Name:
                </label><br />
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} /><br />
                <label htmlFor="email" className="heading">
                    Email:
                </label><br />
                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor="password" className="heading">
                    Password:
                </label><br />
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} /><br />
                <label htmlFor="mobile" className="heading">
                    Mobile No:
                </label><br />
                <input type="text" id="mobile" onChange={(e) => setMobile(e.target.value)} /><br /><br />
                <button className='signup' type='submit'>SignUp</button>
                <p>Already Registered? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup