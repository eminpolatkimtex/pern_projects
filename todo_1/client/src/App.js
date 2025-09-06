import './App.css';
import React, {Fragment} from "react";
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router> 
      <Fragment> 
        <Header /> 
        <Routes> 
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/todos" element={<Homepage />} /> 
        </Routes> 
          <Footer /> 
      </Fragment> 
    </Router>
  );
}

export default App;
