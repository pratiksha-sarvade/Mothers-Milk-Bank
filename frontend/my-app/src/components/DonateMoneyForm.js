import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DonateMoneyForm() {
  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="card p-5 shadow-lg rounded-4 border-0" style={{ maxWidth: '650px', width: '100%', backgroundColor: '#f8f9fa' }}>
        <h4 className="card-title text-center mb-4 fw-bold text-info">
          <i className="bi bi-cash-coin me-2"></i> Monetary Donation Form
        </h4>
        <p className="text-center text-muted mb-4">
          Every contribution, big or small, helps us provide life-saving nutrition to vulnerable babies.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="donationAmount" className="form-label fw-semibold">Amount (INR)</label>
            <input type="number" className="form-control form-control-lg rounded-3" id="donationAmount" min="1" placeholder="e.g., 500" required />
          </div>
          <div className="mb-3">
            <label htmlFor="donorNameMoney" className="form-label fw-semibold">Your Name (Optional)</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="donorNameMoney" placeholder="John Doe" />
          </div>
          <div className="mb-3">
            <label htmlFor="donorEmailMoney" className="form-label fw-semibold">Your Email (Optional)</label>
            <input type="email" className="form-control form-control-lg rounded-3" id="donorEmailMoney" placeholder="name@example.com" />
          </div>
          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="anonymous" />
            <label className="form-check-label fw-semibold" htmlFor="anonymous">Donate Anonymously</label>
          </div>
          <button type="submit" className="btn btn-warning btn-lg w-100 mb-3 shadow-sm" style={{ background: 'linear-gradient(to right, #0dcaf0, #0d6efd)', border: 'none', color: 'white' }}>
            Donate Now
          </button>
        </form>
        <Link to="/" className="btn btn-outline-secondary btn-lg w-100"> 
          Back to Home
        </Link>
      </div>
    </div>
  );
}
