import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useResizeObserver } from '../components/useResizeObserver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorBoundary from '../components/ErrorBoundary';
import { 
  faSearch, 
  faBell, 
  faArrowTrendUp, 
  faBox, 
  faCoins, 
  faDollarSign, 
  faMoneyBillWave,
  faRotate
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

const weeklyData = [
  { name: "Jan", value: 80 },
  { name: "Feb", value: 100 },
  { name: "Mar", value: 75 },
  { name: "Apr", value: 85 },
];

const customerData = [
  { name: "Jan", present: 60, last: 50 },
  { name: "Feb", present: 55, last: 60 },
  { name: "Mar", present: 70, last: 65 },
  { name: "Apr", present: 65, last: 60 },
  { name: "May", present: 75, last: 65 },
  { name: "Jun", present: 70, last: 70 },
  { name: "Jul", present: 80, last: 75 },
  { name: "Aug", present: 85, last: 75 },
];

export default function DashboardContent() {
  const [customerChartRef, customerChartDimensions] = useResizeObserver();
  const [weeklyChartRef, weeklyChartDimensions] = useResizeObserver();

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Sales Report</p>
        </div>
        
      </div>

      <div className="stat-cards">
        {[
          { title: "Total Products", value: "$12032", color: "cyan", icon: faBox },
          { title: "Total Sales", value: "$12032", color: "purple", icon: faCoins },
          { title: "Total Revenue", value: "$12032", color: "blue", icon: faDollarSign },
          { title: "Total Expenses", value: "$12032", color: "orange", icon: faMoneyBillWave },
        ].map((item, index) => (
          <div key={index} className={`stat-card ${item.color}`}>
            <div className="stat-card-header">
              <FontAwesomeIcon icon={item.icon} className="stat-icon" />
              <FontAwesomeIcon icon={faArrowTrendUp} className="arrow-icon" />
            </div>
            <div className="stat-card-content">
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <ErrorBoundary>
      <div className="charts-container">
        <div className="customer-growth-chart" ref={customerChartRef}>
          <h3>Customer growth</h3>
          {customerChartDimensions.width > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={customerData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="present" fill="#3b82f6" />
                <Bar dataKey="last" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        
        <div className="weekly-report-chart" ref={weeklyChartRef}>
          <div className="chart-header">
            <h3>Weekly Report</h3>
            <button className="refresh-button">
              <FontAwesomeIcon icon={faRotate} />
            </button>
          </div>
          {weeklyChartDimensions.width > 0 && (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="value" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      </ErrorBoundary>

      <div className="bottom-section">
        <div className="recent-orders">
          <h3>Recent Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Name</th>
                <th>Place</th>
                <th>Product</th>
                <th>Price</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {[
                { brand: "Abstergo Ltd.", name: "Abdulbari Bishara", place: "Poland", product: "6582", price: "$220.00", status: "Complete" },
                { brand: "Barone LLC.", name: "Salih Tannous", place: "Tajikistan", product: "5201", price: "$452.00", status: "Progress" },
                { brand: "Acme Co.", name: "Bayazit Qureshi", place: "Brazil", product: "1257", price: "$785.00", status: "Pending" },
              ].map((order, index) => (
                <tr key={index}>
                  <td>
                    <div className={`brand-icon ${index === 0 ? 'red' : index === 1 ? 'cyan' : 'green'}`}></div>
                    {order.brand}
                  </td>
                  <td>{order.name}</td>
                  <td>{order.place}</td>
                  <td>{order.product}</td>
                  <td>{order.price}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="top-product">
          <h3>Top Product</h3>
          <div className="product-circle"></div>
          <h4>Product Name</h4>
          <div className="product-stats">
            <div>
              <p>Target</p>
              <p className="stat-value">$45845</p>
            </div>
            <div>
              <p>Sale</p>
              <p className="stat-value">$55843</p>
            </div>
          </div>
          <button className="view-details-button">View Details</button>
        </div>
      </div>
    </div>
  );
}