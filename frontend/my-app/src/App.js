// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ChatBox from './components/Chatbox';

import './App.css'; 

import DonateMilkForm from './components/DonateMilkForm';
import RequestMilkForm from './components/RequestMilkForm';
import DonateMoneyForm from './components/DonateMoneyForm';
import DonorInformationPage from './components/DonorInformatioPage';
import AboutUsPage from './components/AboutUsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUpForm from './components/SignUpPage';
import LoginForm from './components/LoginForm';
import HowToDonate from './components/HowToDonate';
import ContactUsPage from './components/ContactUsPage';
import AdminForm from './components/AdminForm';
import UsersDashboard from './components/UsersDashboard';
import AdminDashboard from './components/AdminDashboard';
import ForgotPasswordForm from './components/ForgotPasswordForm'; // ✅ Import the new component

function AppLayout() {
  const location = useLocation();

  // Determine if the header should be shown.
  // Add '/forgot-password' to the list of paths without the header
  const showHeader = !['/login', '/signup', '/admin', '/forgot-password'].includes(location.pathname);

  return (
    <div className="app-container"> 
      {showHeader && <Header />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate-milk" element={<DonateMilkForm />} />
          <Route path="/request-milk" element={<RequestMilkForm />} />
          <Route path="/donate-money" element={<DonateMoneyForm />} />
          <Route path="/donor-information" element={<DonorInformationPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/signup" element={<SignUpForm />} /> 
          <Route path="/login" element={<LoginForm />} />   
          <Route path="/how-to-donate" element={<HowToDonate />} /> 
          <Route path="/admin" element={<AdminForm />} /> 
          <Route path="/usersDashboard" element={<UsersDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard/>} /> 
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} /> {/* ✅ Add the new route */}
        </Routes>
      </div>

      <ChatBox />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;