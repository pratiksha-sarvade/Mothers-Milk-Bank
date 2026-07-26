import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: Validate password match on client-side
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:9090/api/signup', null, {
        params: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        }
      });

      alert(res.data.message); 
      setFormData({ name: '', email: '', password: '', confirmPassword: '' }); 
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="card p-5 shadow-lg rounded-4 border-0" style={{ maxWidth: '650px', width: '100%', backgroundColor: '#f8f9fa' }}>
        <h4 className="card-title text-center mb-4 fw-bold" style={{ color: '#2C5282' }}>
          <i className="bi bi-person-plus-fill me-2"></i> Create Your Account
        </h4>
        <p className="text-center text-muted mb-4">
          Join our community to support mothers and babies.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
            <input type="email" className="form-control form-control-lg rounded-3" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control form-control-lg rounded-3" id="password" placeholder="Choose a strong password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input type="password" className="form-control form-control-lg rounded-3" id="confirmPassword" placeholder="Re-enter your password" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100 mb-3 shadow-sm" style={{ background: 'linear-gradient(to right, #2C5282, #4A90E2)', border: 'none' }}>
            Sign Up
          </button>
        </form>
        <p className="text-center text-muted">
          Already have an account? <Link to="/login" className="text-decoration-none" style={{ color: '#2C5282' }}>Log In</Link>
        </p>
      </div>
    </div>
  );
}
