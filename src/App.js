import React, { useState, useEffect,useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductTable from './pages/productTable';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Sidebar from './components/sidebar';
import Header from './components/header';
import DashboardContent from './pages/Dashboard';
import Shop from './pages/Shop';
import SubCategory from './pages/SubCategory';
import Category from './pages/Category';
import Login from './pages/login'; // Add Login component
import Signup from './pages/signup'; // Add Signup component
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AuthContext } from './context/Authcontext'; // Import AuthProvider
import { StoreContext } from './context/StoreContext';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { fetchStoreData } = useContext(StoreContext)
  

  useEffect(() => {
    // Check if the user is authenticated based on the token in localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
      fetchStoreData()
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove token from localStorage
    setIsAuthenticated(false); // Set authentication state to false
  };

  return (
      // <Router>
        <div className="app">
          {isAuthenticated && isSidebarVisible && <Sidebar onLogout={handleLogout} />} {/* Pass handleLogout to Sidebar */}
          <div className={`main-content ${!isSidebarVisible ? 'sidebar-hidden' : ''}`}>
            {isAuthenticated && <Header toggleSidebar={toggleSidebar}/>}
            <Routes>
              {!isAuthenticated ? (
                <>
                  <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<ProductTable />} />
                  <Route path="/add-product" element={<AddProduct />} />
                  <Route path="/edit-product/:id" element={<EditProduct />} />
                  <Route path="/dashboard" element={<DashboardContent />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/category" element={<Category />} />
                  <Route path="/subcategory" element={<SubCategory />} />
                  
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      // </Router>
  );
}

export default App;
