// src/components/ForgotPasswordForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineEmail, MdLogin } from 'react-icons/md';
import axios from 'axios';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ show: false, message: '', type: '' });

    try {
      // Replace with your actual backend endpoint for forgot password
      const res = await axios.post(
        'http://localhost:9090/api/forgot-password',
        { email }
      );

      setAlert({
        show: true,
        message: res.data.message || 'Password reset link sent to your email.',
        type: 'success'
      });
      setEmail(''); // Clear the input field
    } catch (error) {
      console.error('Forgot password error:', error);
      setAlert({
        show: true,
        message: error.response?.data?.message || 'Failed to send reset link. Please try again.',
        type: 'danger'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="card p-5 shadow-lg rounded-4 border-0" style={{ maxWidth: '650px', width: '100%', backgroundColor: '#f8f9fa' }}>

        {alert.show && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button type="button" className="btn-close" onClick={() => setAlert({ show: false })}></button>
          </div>
        )}

        <h4 className="card-title text-center mb-4 fw-bold" style={{ color: '#2C5282' }}>
          Forgot Your Password?
        </h4>
        <p className="text-center text-muted mb-4">
          Enter your email address below and we'll send you a link to reset your password.
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                Sending...
              </>
            ) : (
              <>
                <MdLogin className="me-2" /> Send Reset Link
              </>
            )}
          </button>
        </form>

        <p className="text-center text-muted">
          Remember your password?{' '}
          <Link to="/login" className="text-decoration-none" style={{ color: '#2C5282' }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}