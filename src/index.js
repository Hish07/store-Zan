import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/Authcontext';
import App from './App';
import { StoreProvider } from './context/StoreContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/partners">
      <AuthProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);