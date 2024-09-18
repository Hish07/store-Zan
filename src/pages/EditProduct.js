import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaUpload, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../components/Footer';
import './EditProduct.css';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productName, setProductName] = useState('Nike Sportswear Heritage86 Futura Washed');
  const [description, setDescription] = useState('Crafted from soft fabric, the Nike Sportswear Heritage86 Futura Washed Hat has a 6-panel design for classic comfort, and an adjustable closure for a personalised fit. WASHED TWILL IN A CLASSIC DESIGN.');
  const [stock, setStock] = useState('999');
  const [price, setPrice] = useState('199');
  const [visibility, setVisibility] = useState('scheduled');
  const [scheduleDate, setScheduleDate] = useState(null);
  const [scheduleDiscount, setScheduleDiscount] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [subsidiaryImages, setSubsidiaryImages] = useState([]);

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMainImage(URL.createObjectURL(file));
    }
  };

  const handleSubsidiaryImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && subsidiaryImages.length < 5) {
      setSubsidiaryImages([...subsidiaryImages, URL.createObjectURL(file)]);
    }
  };

  const removeSubsidiaryImage = (index) => {
    const newImages = [...subsidiaryImages];
    newImages.splice(index, 1);
    setSubsidiaryImages(newImages);
  };

  const handleSave = () => {
    // Implement save logic here
    navigate('/');
  };

  const handleDiscard = () => {
    navigate('/');
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-input" onClick={onClick} ref={ref}>
      <FaCalendarAlt className="calendar-icon" />
      <input value={value} readOnly placeholder="Select Date" />
    </div>
  ));

  return (
    <div className="edit-product-page">
      <div className="edit-product-header">
        <div className="breadcrumb">Dashboard / Products / Edit Product</div>
        <h2>Edit Product</h2>
      </div>
      
      <div className="edit-product-content">
        <div className="edit-product-left">
          <div className="white-box">
            <h3>Basic Information</h3>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          
          <div className="white-box">
            <h3>Stock & Pricing</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Stock"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
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
        
        <div className="edit-product-right">
          <div className="white-box">
            <h3>Product Image</h3>
            <div className="image-upload">
              <label htmlFor="mainImageUpload">
                {mainImage ? (
                  <img src={mainImage} alt="Main Product" className="image-preview" />
                ) : (
                  <>
                    <FaUpload />
                    <p>Upload your main product image</p>
                    <p className="upload-info">Only PNG, JPG format allowed.</p>
                    <p className="upload-info">500x500 pixels size recommended.</p>
                  </>
                )}
                <input
                  type="file"
                  id="mainImageUpload"
                  accept="image/png, image/jpeg"
                  onChange={handleMainImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
            <div className="subsidiary-images">
              {subsidiaryImages.map((img, index) => (
                <div key={index} className="subsidiary-image">
                  <img src={img} alt={`Subsidiary ${index + 1}`} />
                  <button className="remove-image" onClick={() => removeSubsidiaryImage(index)}>
                    <FaTimes />
                  </button>
                </div>
              ))}
              {subsidiaryImages.length < 5 && (
                <label htmlFor="subsidiaryImageUpload" className="subsidiary-image-upload">
                  <FaUpload />
                  <input
                    type="file"
                    id="subsidiaryImageUpload"
                    accept="image/png, image/jpeg"
                    onChange={handleSubsidiaryImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              )}
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
      <Footer onSave={handleSave} onDiscard={handleDiscard} />
    </div>
  );
}