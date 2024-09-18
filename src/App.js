import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductTable from './pages/productTable';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Sidebar from './components/sidebar';
import Header from './components/header';
import './App.css';
import DashboardContent from './pages/Dashboard'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<ProductTable />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />

            <Route path ="/dashboard" element = {<DashboardContent/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;