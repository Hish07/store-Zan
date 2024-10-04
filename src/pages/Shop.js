import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext'
import './Shop.css';

const Shop = () => {
  const {formData, setFormData,images, setImages, loading, error, updateFormData,fetchStoreData } = useContext(StoreContext);
    
  useEffect(() => {
    fetchStoreData();
  }, []);


  const handleImageChange = (e, imageKey) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prevImages => ({
          ...prevImages,
          [imageKey]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleWorkingDaysChange = (day) => {
    setFormData(prevState => ({
      ...prevState,
      workingDays: prevState.workingDays.includes(day)
        ? prevState.workingDays.filter(d => d !== day)
        : [...prevState.workingDays, day]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(images);
    // Here you would typically send the data to your backend
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shop-container">
      <h1>Create Store</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="shopName">Shop Name</label>
            <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch</label>
            <input type="text" id="branch" name="branch" value={formData.branch} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="shopCode">Shop Code</label>
            <input type="text" id="shopCode" name="shopCode" value={formData.shopCode} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input type="url" id="url" name="url" value={formData.url} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address1">Address1</label>
            <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address2">Address2</label>
            <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address3">Address3</label>
            <input type="text" id="address3" name="address3" value={formData.address3} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="primaryPhone">Primary Phone</label>
            <input type="tel" id="primaryPhone" name="primaryPhone" value={formData.primaryPhone} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="secondaryPhone">Secondary Phone</label>
            <input type="tel" id="secondaryPhone" name="secondaryPhone" value={formData.secondaryPhone} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mainContactPerson">Main Contact Person</label>
            <input type="text" id="mainContactPerson" name="mainContactPerson" value={formData.mainContactPerson} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mainContactPersonContact">Main Contact Person Contact</label>
            <input type="tel" id="mainContactPersonContact" name="mainContactPersonContact" value={formData.mainContactPersonContact} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="openTime">Open Time</label>
            <input type="time" id="openTime" name="openTime" value={formData.openTime} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="closeTime">Close Time</label>
            <input type="time" id="closeTime" name="closeTime" value={formData.closeTime} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="workingDays">Working Days</label>
            <div className="working-days">
              {['M', 'T', 'W', 'T', 'F', 'Sa', 'S'].map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className={formData.workingDays.includes(day) ? 'active' : ''}
                  onClick={() => handleWorkingDaysChange(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="preOrderAvail">Pre order Avail</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="preOrderAvail"
                name="preOrderAvail"
                checked={formData.preOrderAvail}
                onChange={handleInputChange}
              />
              <label htmlFor="preOrderAvail">
                {formData.preOrderAvail ? 'Active' : 'Inactive'}
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="deliveryCharge">Delivery Charge</label>
            <input type="number" id="deliveryCharge" name="deliveryCharge" value={formData.deliveryCharge} onChange={handleInputChange} step="0.01" />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMode">Payment Mode</label>
            <select id="paymentMode" name="paymentMode" value={formData.paymentMode} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="restaurant">Restaurant</option>
              <option value="grocery">Grocery</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="buyOption">Buy Option</label>
            <select id="buyOption" name="buyOption" value={formData.buyOption} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="delivery">Delivery</option>
              <option value="pickup">Pickup</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="yearOfOperation">Year of Operation</label>
            <input type="number" id="yearOfOperation" name="yearOfOperation" value={formData.yearOfOperation} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="status"
                name="status"
                checked={formData.status === 'active'}
                onChange={(e) => setFormData(prevState =>
                  ({ ...prevState, status: e.target.checked ? 'active' : 'inactive' }))}
              />
              <label htmlFor="status">
                {formData.status === 'active' ? 'Active' : 'Inactive'}
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select id="currency" name="currency" value={formData.currency} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="paymentPlan">Payment Plan</label>
            <select id="paymentPlan" name="paymentPlan" value={formData.paymentPlan} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="averageCost">Average Cost</label>
            <input type="number" id="averageCost" name="averageCost" value={formData.averageCost} onChange={handleInputChange} step="0.01" />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryTotalMinute">Delivery Total Minute</label>
            <input type="number" id="deliveryTotalMinute" name="deliveryTotalMinute" value={formData.deliveryTotalMinute} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="image1">Image 1</label>
            <input
              type="file"
              id="image1"
              onChange={(e) => handleImageChange(e, 'image1')}
              accept="image/*"
            />
            {images.image1 && (
              <img src={images.image1} alt="Preview 1" className="image-preview" />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="image2">Image 2</label>
            <input
              type="file"
              id="image2"
              onChange={(e) => handleImageChange(e, 'image2')}
              accept="image/*"
            />
            {images.image2 && (
              <img src={images.image2} alt="Preview 2" className="image-preview" />
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="image3">Image 3</label>
            <input
              type="file"
              id="image3"
              onChange={(e) => handleImageChange(e, 'image3')}
              accept="image/*"
            />
            {images.image3 && (
              <img src={images.image3} alt="Preview 3" className="image-preview" />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="image4">Image 4</label>
            <input
              type="file"
              id="image4"
              onChange={(e) => handleImageChange(e, 'image4')}
              accept="image/*"
            />
            {images.image4 && (
              <img src={images.image4} alt="Preview 4" className="image-preview" />
            )}
          </div>
        </div>
        <button type="submit" className="submit-btn">Create Store</button>
      </form>
    </div>
  );
};

export default Shop;