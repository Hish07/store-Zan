import React, { useState } from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa'; 
import './header.css'; 

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <input type="text" placeholder="Search something here" className="search-bar" />
      <div className="user-info">
        <FaBell className="notification-icon" />
        <div className="profile-section" onClick={toggleDropdown}>
        <img 
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt="Profile"
          className="profile-pic"
        />
          <div className="profile-details">
            
            <span className="user-name">Arfi Ganteng</span>
            <span className="user-email">arfi.ganteng@mail.com</span>
          </div>
          <FaChevronDown className="dropdown-icon" />
        </div>
      
        {dropdownOpen && (
          <div className="dropdown-menu">
            <span>User Info</span>
            <span>Settings</span>
            <span>Logout</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
