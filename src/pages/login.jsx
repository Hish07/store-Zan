import React, { useState, useContext } from 'react';
import './login.css';  // Use a separate CSS file for login styles
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {StoreContext} from '../context/StoreContext';
import { AuthContext } from '../context/Authcontext';


const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const navigate = useNavigate();
  const { fetchStoreData } = useContext(StoreContext)
  const { login, error } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password, fetchStoreData);
    
    // setError('');  // Reset error message

    // try {
    //   const response = await axios.post('http://www.storezan.com/webapi/token', 
    //     new URLSearchParams({
    //       grant_type: 'password',
    //       username: email,
    //       password: password,
    //     }), 
    //     {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //     }
    //   );

    //   const data = response.data;
    //   console.log('Login successful:', data);
      

    //   // Save the access token in localStorage
    //   localStorage.setItem('access_token', data.access_token);

    //   // Update the authentication state
    //   setIsAuthenticated(true);

    //   // Navigate to the dashboard
    //   navigate('/dashboard');
    // } catch (err) {
    //   console.error('Login failed:', err);
    //   setError('Invalid email or password. Please try again.');
    // }
  };

  return (
    <section className="login-wrapp">
      <div className="login-left">
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="text-fields">
              <div className="text-field">
                <label htmlFor="email" className="heading">
                  Email:
                </label>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="text-field pass">
                <label htmlFor="password" className="heading">
                  Password:
                </label>
                <input id="password" className="pswd" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="submit-btn" type="submit">Login</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <p>Not Registered? <Link to="/signup">SignUp</Link></p>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right">
        <img src="http://storezan.com/images/st.jpg" alt="" />
      </div>
    </section>
  );
};

export default Login;
