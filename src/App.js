import React from 'react';
import Sidebar from './components/sidebar'
import Header from './components/header';
import ProductTable from './components/productTable';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ProductTable />
      </div>
    </div>
  );
}

export default App;
