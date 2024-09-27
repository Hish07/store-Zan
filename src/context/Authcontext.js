import React, { createContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('access_token'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (newToken) => {
    localStorage.setItem('access_token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    console.log('gfhffgg')
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout,isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
