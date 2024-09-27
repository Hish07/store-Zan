import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/Authcontext';
import App from './App';
import { StoreProvider } from './context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
    <StoreProvider>
    <App />
    </StoreProvider>
    </AuthProvider>
  </React.StrictMode>
);