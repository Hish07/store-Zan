import React, { useState,useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaUsers, FaTags, FaClipboardList, FaTicketAlt, FaCommentDots, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css';
import { FaShop } from 'react-icons/fa6';
import { AuthContext } from '../context/Authcontext';

const Sidebar = () => {  // Accept the onLogout prop
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);
  
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogoutClick = () => {
    console.log('funggggg')
    logout();
    navigate('/login');  // Redirect to the login page
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
        <li
          className={activeMenu === 'Dashboard' ? 'active' : ''}
          onClick={() => handleMenuClick('Dashboard')}
        >
          <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>
        </li>
        <li
          className={activeMenu === 'Shop' ? 'active' : ''}
          onClick={() => handleMenuClick('Shop')}
        >
          <Link to="/shop"><FaShop /> Store</Link>
        </li>
        <li
          className={activeMenu === 'Products' ? 'active' : ''}
          onClick={() => handleMenuClick('Products')}
        >
          <Link to="/"><FaBox /> Products</Link>
        </li>
        <li
          className={activeMenu === 'Customer' ? 'active' : ''}
          onClick={() => handleMenuClick('Customer')}
        >
          <FaUsers /> Customer
        </li>
        <li
          className={activeMenu === 'Category' ? 'active' : ''}
          onClick={() => handleMenuClick('Category')}
        >
          <FaTags /> Category
        </li>
        <li
          className={activeMenu === 'Orders' ? 'active' : ''}
          onClick={() => handleMenuClick('Orders')}
        >
          <FaClipboardList /> Orders
        </li>
        <li
          className={activeMenu === 'Coupons' ? 'active' : ''}
          onClick={() => handleMenuClick('Coupons')}
        >
          <FaTicketAlt /> Coupons
        </li>
        <li
          className={activeMenu === 'Chats' ? 'active' : ''}
          onClick={() => handleMenuClick('Chats')}
        >
          <FaCommentDots /> Chats
        </li>
      </ul>

      <div>Others</div>
      <ul className="menu-list">
        <li
          className={activeMenu === 'Settings' ? 'active' : ''}
          onClick={() => handleMenuClick('Settings')}
        >
          <FaCog /> Settings
        </li>
        <li
          className={activeMenu === 'Logout' ? 'active' : ''}
          onClick={handleLogoutClick}  // Trigger logout and navigation on click
        >
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
