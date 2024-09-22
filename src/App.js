import React, { useState } from 'react';
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
import Shop from './pages/Shop';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="app">
        {isSidebarVisible && <Sidebar />}
        <div className={`main-content ${!isSidebarVisible ? 'sidebar-hidden' : ''}`}>
          <Header toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<ProductTable />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;