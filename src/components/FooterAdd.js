import React from 'react';
import './FooterAdd.css';

const FooterAdd = ({ onSave, onCancel }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        <button className="btn-add-product" onClick={onSave}>Add Product</button>
      </div>
    </footer>
  );
};

export default FooterAdd;