import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// The main React component for the milk request form.
export default function App() {
  const [formData, setFormData] = useState({
    recipientId: '',
    babyName: '',
    parentName: '',
    address: '',
    dob: '',
    phoneNo: '',
  });

  // A helper function to get today's date in 'YYYY-MM-DD' format.
  // This is used to set the `max` attribute on the date input,
  // which prevents users from selecting future dates.
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      babyName: formData.babyName,
      parentName: formData.parentName,
      address: formData.address,
      dob: formData.dob,
      phoneNo: formData.phoneNo,
      recipient: {
        id: parseInt(formData.recipientId)
      }
    };

    try {
      const response = await axios.post('http://localhost:9090/api/requests', requestData);
      console.log('Request submitted:', response.data);
      // NOTE: alert() is not supported in this environment.
      // A custom modal or message box UI is recommended for user feedback.
      console.log('Milk request submitted successfully!');
    } catch (error) {
      console.error('Error submitting request:', error);
      // NOTE: alert() is not supported in this environment.
      // A custom modal or message box UI is recommended for user feedback.
      console.log('Failed to submit milk request.');
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="card p-5 shadow-lg rounded-4 border-0" style={{ maxWidth: '650px', width: '100%', backgroundColor: '#f8f9fa' }}>
        <h4 className="card-title text-center mb-4 fw-bold text-info">
          <i className="bi bi-hand-index-thumb-fill me-2"></i> Milk Request Form
        </h4>
        <p className="text-center text-muted mb-4">
          Please provide the necessary details to request donated milk for a baby in need.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="recipientId" className="form-label fw-semibold">Recipient ID</label>
            <input type="number" className="form-control form-control-lg rounded-3" id="recipientId" placeholder="e.g., 3" required value={formData.recipientId} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="babyName" className="form-label fw-semibold">Baby's Name</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="babyName" placeholder="Full name of the baby" required value={formData.babyName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="parentName" className="form-label fw-semibold">Parent's Name</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="parentName" placeholder="Parent's Name" required value={formData.parentName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold">Address</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="address" placeholder="Address" required value={formData.address} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label fw-semibold">Baby's Date of Birth</label>
            <input 
              type="date" 
              className="form-control form-control-lg rounded-3" 
              id="dob" 
              required 
              value={formData.dob} 
              onChange={handleChange} 
              max={getTodayDate()} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="form-label fw-semibold">Contact Number</label>
            <input type="text" className="form-control form-control-lg rounded-3" id="phoneNo" placeholder="+91 98765 43210" required value={formData.phoneNo} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-info btn-lg w-100 mb-3 shadow-sm" style={{ background: 'linear-gradient(to right, #0dcaf0, #0d6efd)', border: 'none', color: 'white' }}>
            Submit Request
          </button>
        </form>
        <Link to="/" className="btn btn-outline-secondary btn-lg w-100">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
