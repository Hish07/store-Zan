import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('access_token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = async ( email, password, fetchStoreData ) => {
    // e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://www.storezan.com/webapi/token', 
        new URLSearchParams({
          grant_type: 'password',
          username: email,
          password: password,
        }), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const data = response.data;
      console.log('Login successful:', data);
      

      // Save the access token in localStorage
      localStorage.setItem('access_token', data.access_token);

      // Update the authentication state
      setIsAuthenticated(true);
      fetchStoreData()

      // Navigate to the dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
      setError('Invalid email or password. Please try again.');
    }
    // localStorage.setItem('access_token', newToken);
    // setToken(newToken);
  };

  const logout = () => {
    console.log('gfhffgg')
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout,isAuthenticated, setIsAuthenticated, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
