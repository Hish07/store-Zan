import React from 'react';
import './Footer.css';

const Footer = ({ onSave, onDiscard }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="btn-cancel" onClick={onDiscard}>Discard</button>
        <button className="btn-add-product" onClick={onSave}>Save Changes</button>
      </div>
    </footer>
  );
};

export default Footer;