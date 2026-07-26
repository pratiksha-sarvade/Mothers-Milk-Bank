import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function DonateMilkForm() {
  const [formData, setFormData] = useState({
    donorId: '',
    name: '',
    address: '',
    phoneNo: '',
    quantity: '',
    date: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      donor: {
        id: parseInt(formData.donorId)
      },
      name: formData.name,
      address: formData.address,
      phoneNo: formData.phoneNo,
      quantity: parseInt(formData.quantity),
      date: formData.date
    };

    try {
      const response = await axios.post('http://localhost:9090/api/donations', donationData);
      console.log('Donation submitted:', response.data);
      alert('Donation submitted successfully!');
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert('Failed to submit donation.');
    }
  };

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="card p-5 shadow-lg rounded-4 border-0" style={{ maxWidth: '650px', width: '100%', backgroundColor: '#f8f9fa' }}>
        <h4 className="card-title text-center mb-4 fw-bold text-primary">
          <i className="bi bi-droplet-fill me-2"></i> Milk Donation Form
        </h4>
        <p className="text-center text-muted mb-4">
          Your generosity saves lives. Please provide your details to initiate the milk donation process.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="donorId" className="form-label fw-semibold">Your Donor ID</label>
            <input type="number" className="form-control form-control-lg rounded-3" id="donorId" placeholder="e.g., 2" required value={formData.donorId} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="name" placeholder="Enter your full name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold">Address</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="address" placeholder="Address" required value={formData.address} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNo" className="form-label fw-semibold">Phone Number</label>
            <input type="tel" className="form-control form-control-lg rounded-3" id="phoneNo" placeholder="+91 12345 67890" required value={formData.phoneNo} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-semibold">Approx. Quantity (in ml)</label>
            <input type="number" className="form-control form-control-lg rounded-3" id="quantity" min="1" placeholder="e.g., 500" required value={formData.quantity} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="form-label fw-semibold">Preferred Pickup Date</label>
            <input type="date" className="form-control form-control-lg rounded-3" id="date" required value={formData.date} onChange={handleChange} max={getTodayDate()} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100 mb-3 shadow-sm" style={{ background: 'linear-gradient(to right, #0dcaf0, #0d6efd)', border: 'none' }}>
            Submit Donation Request
          </button>
        </form>
        <Link to="/" className="btn btn-outline-secondary btn-lg w-100">
          Back to Home
        </Link>
      </div>
    </div>
  );
}