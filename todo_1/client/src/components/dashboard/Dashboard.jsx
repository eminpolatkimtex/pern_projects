import React from "react";
import picture from '../../assets/manzara.jpg'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos explicabo minus id praesentium expedita perferendis maxime consectetur quas, doloribus quo est dolor quae ab enim temporibus nam ea sapiente.
      </p>
      <div className="dashboard-image">
        <img 
          src={picture} 
          alt="Dashboard Illustration" 
        />
      </div>
    </div>
  );
};

export default Dashboard;
