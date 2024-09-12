import React, { useState } from 'react';
import { FaTachometerAlt, FaBox, FaUsers, FaTags, FaClipboardList, FaTicketAlt, FaCommentDots, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css'; 

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Products'); // Default active menu

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="StoreZan Logo" className="logo-img" />
       
       
      </div>
      <h4 className="logo-text">StoreZan</h4>
    
     
      <div>Menu</div>
      <ul className="menu-list">
        <li
          className={activeMenu === 'Dashboard' ? 'active' : ''}
          onClick={() => handleMenuClick('Dashboard')}
        >
          <FaTachometerAlt /> Dashboard
        </li>
        <li
          className={activeMenu === 'Products' ? 'active' : ''}
          onClick={() => handleMenuClick('Products')}
        >
          <FaBox /> Products
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
          onClick={() => handleMenuClick('Logout')}
        >
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
