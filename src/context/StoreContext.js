import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for the store
export const StoreContext = createContext();

// Create a provider component
export const StoreProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    shopName: '',
    branch: '',
    shopCode: '',
    url: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    email: '',
    primaryPhone: '',
    secondaryPhone: '',
    mainContactPerson: '',
    mainContactPersonContact: '',
    openTime: '',
    closeTime: '',
    workingDays: [],
    deliveryCharge: '',
    category: '',
    yearOfOperation: '',
    currency: '',
    averageCost: '',
    preOrderAvail: false,
    paymentMode: '',
    buyOption: '',
    status: 'active',
    paymentPlan: '',
    deliveryTotalMinute: ''
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    console.log('Form Data : ', formData)
  }, [formData])

  // Fetch store data function
  const fetchStoreData = async () => {
    console.log('FetchStore Data Called')
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('access_token');
    try {
      const response = await axios.get(' https://www.storezan.com/webapi/STORE/storedata', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      if (data.status[0].stat === 'T') {
        const storeData = data.storedt[0];
        updateFormData(storeData);
        console.log(storeData)
      } else {
        setError('Failed to fetch store data: ' + data.status[0].message);
      }
    } catch (error) {
      console.error('Error fetching store data:', error);
      setError('Error fetching store data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Update form data function
  const updateFormData = (storeData) => {
    setFormData({
      // Shop and Store Info
      shopName: storeData.SHOPNAME || '',
      shopCode: storeData.SHOPCODE || '',
      branch: storeData.branch || '',
      url: storeData.STORE_URL || '',
      address1: storeData.address || '',
      address2: storeData.SHOPADDRESS2 || '',
      address3: storeData.STORE_ADDR3 || '',
      city: storeData.city || '',
      state: storeData.state || '',
      country: storeData.country || '',
      postalCode: storeData.pcode || '',
      openTime: formatTime(storeData.STORE_OPENTM),
      closeTime: formatTime(storeData.STORE_CLOSETM),
      workingDays: parseWorkingDays(storeData.STORE_OPENDAYS),
      yearOfOperation: storeData.yearofoperation || '',
      averageCost: storeData.STORE_Avgcost || 0,
  
      // Contact Info
      email: storeData.Email || '',
      primaryPhone: storeData.PhoneNumber || '',
      secondaryPhone: storeData.SHOPPHONENUMBER2 || '',
      mainContactPerson: storeData.SHOPINCHANGE || '',
      mainContactPersonContact: storeData.SHOPINCHANGEPHONE || '',
  
      // Company and Category Info
      companyName: storeData.Companyname || '',
      category: storeData.CATNAME || '',
      categoryId: storeData.categoryid || 0,
  
      // Delivery and Payment
      deliveryCharge: storeData.STORE_DELIVCHRG || 0,
      deliveryTotalMinute: storeData.STORE_Deliveryminutes || 0,
      preOrderAvail: storeData.STORE_Preorderavail === 'T',
      paymentMode: storeData.STORE_PAYMODE === 'O' ? 'online' : (storeData.STORE_PAYMODE === 'C' ? 'cash' : ''),
      paymentPlan: storeData.STORE_Payment_P_ID === 1 ? 'percentage' : (storeData.STORE_Payment_P_ID === 2 ? 'monthly' : ''),
      buyOption: storeData.STORE_BOID === 1 ? 'delivery' : (storeData.STORE_BOID === 2 ? 'takeaway' : ''),
  
      // Status
      status: storeData.status === 'T' ? 'active' : 'inactive',
  
      // Other Shop Info
      shopEmail: storeData.SHOPEMAIL || '',
      shopLanguage: storeData.SHOPLANG || '',
      shopComments: storeData.SHOPCOMMENTS || '',
      shopLat: storeData.SHOPLAT || '',
  
      // Owner Info
      firstName: storeData.FirstName || '',
      lastName: storeData.LastName || '',
      
      // Miscellaneous
      currency: storeData.currency === 1 ? 'INR' : '',
      deliveryStatus: storeData.deliverystatus || 0,
      retailLocation: storeData.retaillocation || '',
      annualInStore: storeData.annualinstore || ''
    });
  
  

    setImages({
      image1: storeData.STORE_IMG1 || null,
      image2: storeData.STORE_IMG2 || null,
      image3: storeData.STORE_IMG3 || null,
      image4: storeData.STORE_IMG4 || null
    });
  };

  // Helper function for formatting time
  const formatTime = (timeString) => {
    if (!timeString || timeString === '1900-01-01T00:00:00') return '';
    return timeString.substring(11, 16); // Extract HH:mm from the time string
  };

  // Helper function for parsing working days
  const parseWorkingDays = (daysString) => {
    if (!daysString) return [];
    return daysString.split(',').map(day => day.trim());
  };

  return (
    <StoreContext.Provider
      value={{
        formData,
        images,
        setFormData,
        setImages,
        loading,
        error,
        fetchStoreData,
        updateFormData,
        formatTime,
        parseWorkingDays
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
