import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt, FaBox, FaUsers, FaTags, FaClipboardList, FaTicketAlt, FaCommentDots, FaCog, FaSignOutAlt
} from 'react-icons/fa';
import './sidebar.css';
import { FaShop } from 'react-icons/fa6';
import { AuthContext } from '../context/Authcontext';

export default function Sidebar() {  
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout();
    navigate('/login');  
  };

  return (
    <div className="sidebar">
      <div className="logo-section">
        <Link to="/dashboard">
          <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="StoreZan Logo" className="logo-img" />
        </Link>
      </div>
      <h4 className="logo-text">StoreZan</h4>

      <div>Menu</div>
      <ul className="menu-list">
        <li className={activeMenu === 'Dashboard' ? 'active' : ''}>
          <Link to="/dashboard" onClick={() => handleMenuClick('Dashboard')}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li className={activeMenu === 'Shop' ? 'active' : ''}>
          <Link to="/shop" onClick={() => handleMenuClick('Shop')}>
            <FaShop /> Store
          </Link>
        </li>
        <li className={activeMenu === 'Products' ? 'active' : ''}>
          <Link to="/" onClick={() => handleMenuClick('Products')}>
            <FaBox /> Products
          </Link>
        </li>
        <li className={activeMenu === 'Customer' ? 'active' : ''}>
          <Link to="#" onClick={() => handleMenuClick('Customer')}>
            <FaUsers /> Customer
          </Link>
        </li>
        <li className={activeMenu === 'Category' ? 'active' : ''}>
          <Link to="/category" onClick={() => handleMenuClick('Category')}>
            <FaTags /> Category
          </Link>
        </li>
        <li className={activeMenu === 'Sub Category' ? 'active' : ''}>
          <Link to="/subcategory" onClick={() => handleMenuClick('Sub Category')}>
            <FaTags /> Sub Category
          </Link>
        </li>
        <li className={activeMenu === 'Orders' ? 'active' : ''}>
          <Link to="#" onClick={() => handleMenuClick('Orders')}>
            <FaClipboardList /> Orders
          </Link>
        </li>
        <li className={activeMenu === 'Coupons' ? 'active' : ''}>
          <Link to="#" onClick={() => handleMenuClick('Coupons')}>
            <FaTicketAlt /> Coupons
          </Link>
        </li>
        <li className={activeMenu === 'Chats' ? 'active' : ''}>
          <Link to="#" onClick={() => handleMenuClick('Chats')}>
            <FaCommentDots /> Chats
          </Link>
        </li>
      </ul>

      <div>Others</div>
      <ul className="menu-list">
        <li className={activeMenu === 'Settings' ? 'active' : ''}>
          <Link to="#" onClick={() => handleMenuClick('Settings')}>
            <FaCog /> Settings
          </Link>
        </li>
        <li className={activeMenu === 'Logout' ? 'active' : ''}>
          <Link to="#" onClick={handleLogoutClick}>
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}