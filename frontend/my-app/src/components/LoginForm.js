import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineEmail, MdOutlineLock, MdLogin } from 'react-icons/md';
import axios from 'axios';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, message: '', type: '' });

    try {
      const res = await axios.post(
        'http://localhost:9090/api/login',
        null,
        {
          params: {
            email: formData.email,
            password: formData.password
          }
        }
      );

      // ✅ Save name to localStorage
      const userName = res.data.name || 'User';
      localStorage.setItem('userName', userName);

      setAlert({ show: true, message: res.data.message || 'Login successful', type: 'success' });

      setTimeout(() => {
        navigate('/usersDashboard');
      }, 1500);
    } catch (error) {
      console.error('Login error:', error);
      setAlert({
        show: true,
        message: error.response?.data?.message || 'Invalid credentials',
        type: 'danger'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="card p-5 shadow-lg rounded-4 border-0" style={{ maxWidth: '650px', width: '100%', backgroundColor: '#f8f9fa' }}>
        
        {/* ✅ Bootstrap Alert */}
        {alert.show && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button type="button" className="btn-close" onClick={() => setAlert({ show: false })}></button>
          </div>
        )}

        <h4 className="card-title text-center mb-4 fw-bold" style={{ color: '#2C5282' }}>
          <MdLogin className="me-2" size={32} /> Log In to Your Account
        </h4>
        <p className="text-center text-muted mb-4">
          Welcome back! Please enter your credentials to access your dashboard.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold d-flex align-items-center">
              <MdOutlineEmail className="me-2" /> Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg rounded-3"
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold d-flex align-items-center">
              <MdOutlineLock className="me-2" /> Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg rounded-3"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mb-3 shadow-sm"
            style={{
              background: 'linear-gradient(to right, #2C5282, #4A90E2)',
              border: 'none'
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : (
              <>
                <MdLogin className="me-2" /> Log In
              </>
            )}
          </button>
        </form>

        <p className="text-center text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-decoration-none" style={{ color: '#2C5282' }}>
            Sign Up
          </Link>
        </p>

        <p className="text-center text-muted">
          <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#2C5282' }}>
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}
