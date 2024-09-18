import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FooterAdd from '../components/FooterAdd';
import './AddProduct.css';

export default function AddProduct() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [visibility, setVisibility] = useState('scheduled');
  const [scheduleDate, setScheduleDate] = useState(null);
  const [scheduleDiscount, setScheduleDiscount] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Implement save logic here
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-input" onClick={onClick} ref={ref}>
      <FaCalendarAlt className="calendar-icon" />
      <input value={value} readOnly placeholder="Select Date" />
    </div>
  ));

  return (
    <div className="add-product-page">
      <div className="add-product-header">
        <div className="breadcrumb">Dashboard / Products / Add Product</div>
        <h2>Add Product</h2>
      </div>
      
      <div className="add-product-content">
        <div className="add-product-left">
          <div className="white-box">
            <h3>Basic Information</h3>
            <div className="form-group">
              <label htmlFor="productName"></label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description"></label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descriptions"
              />
            </div>
          </div>
          
          <div className="white-box">
            <h3>Stock & Pricing</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="stock"></label>
                <input
                  type="number"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Stock"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price"></label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={scheduleDiscount}
                  onChange={(e) => setScheduleDiscount(e.target.checked)}
                />
                Schedule a discount
              </label>
            </div>
          </div>
        </div>
        
        <div className="add-product-right">
          <div className="white-box">
            <h3>Product Image</h3>
            <div className="image-upload">
              <label htmlFor="imageUpload">
                {image ? (
                  <img src={image} alt="Product Preview" className="image-preview" />
                ) : (
                  <>
                    <FaUpload />
                    <p>Upload your product image.</p>
                    <p className="upload-info">Only PNG, JPG format allowed.</p>
                    <p className="upload-info">500x500 pixels size recommended.</p>
                  </>
                )}
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/png, image/jpeg"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>
          
          <div className="white-box">
            <h3>Visibility</h3>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  value="published"
                  checked={visibility === 'published'}
                  onChange={(e) => setVisibility(e.target.value)}
                />
                Published
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  value="scheduled"
                  checked={visibility === 'scheduled'}
                  onChange={(e) => setVisibility(e.target.value)}
                />
                Scheduled
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  value="hidden"
                  checked={visibility === 'hidden'}
                  onChange={(e) => setVisibility(e.target.value)}
                />
                Hidden
              </label>
            </div>
            {visibility === 'scheduled' && (
              <div className="form-group date-picker">
                <DatePicker
                  selected={scheduleDate}
                  onChange={(date) => setScheduleDate(date)}
                  dateFormat="MMMM d, yyyy"
                  customInput={<CustomInput />}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterAdd onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}