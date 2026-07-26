import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Motherslogo from '../Img/Motherslogo.png';
import axios from 'axios';

function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const [donationData, setDonationData] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]); // ✅ New state for milk inventory

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/login');
  };

  useEffect(() => {
    if (selectedSection === 'milk-donation') {
      axios.get('http://localhost:9090/api/donations')
        .then((response) => setDonationData(response.data))
        .catch((error) => console.error('Donation fetch error:', error));
    }

    if (selectedSection === 'milk-request') {
      axios.get('http://localhost:9090/api/requests')
        .then((response) => setRequestData(response.data))
        .catch((error) => console.error('Request fetch error:', error));
    }

    if (selectedSection === 'users') {
      axios.get('http://localhost:9090/api/users')
        .then((response) => setUsersData(response.data))
        .catch((error) => console.error('Users fetch error:', error));
    }

    if (selectedSection === 'donate-money') {
      axios.get('http://localhost:9090/api/payments')
        .then((response) => setPaymentData(response.data))
        .catch((error) => console.error('Payment fetch error:', error));
    }

    if (selectedSection === 'milk-inventory') { // ✅ Fetch milk inventory
      axios.get('http://localhost:9090/api/inventory')
        .then((response) => setInventoryData(response.data))
        .catch((error) => console.error('Inventory fetch error:', error));
    }
  }, [selectedSection]);

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <aside style={{ backgroundColor: '#2C5282', color: 'white', width: 200, padding: 20 }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          <Link className="navbar-brand" to="/">
            <img src={Motherslogo} alt="Logo" height="35" style={{ marginBottom: '20px' }} />
          </Link>
          {['dashboard', 'milk-inventory', 'milk-donation', 'milk-request', 'donate-money', 'users'].map((section) => (
            <div
              key={section}
              onClick={() => setSelectedSection(section)}
              style={{
                ...linkStyle,
                backgroundColor: selectedSection === section ? '#1A365D' : 'transparent'
              }}
            >
              {section.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flexGrow: 1, backgroundColor: '#FAFAFA' }}>
        
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px' }}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#2C5282',
              color: 'white',
              border: 'none',
              padding: '6px 14px',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>

        {/* Milk Inventory Section ✅ */}
        {selectedSection === 'milk-inventory' && (
          <section style={{ padding: 40 }}>
            <h2 style={{ color: '#2C5282', marginBottom: 20 }}>Milk Inventory</h2>
            {inventoryData.length > 0 ? (
              <table style={{ width: '50%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead style={{ backgroundColor: '#2C5282', color: 'white' }}>
                  <tr>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Quantity (ml)</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item) => (
                    <tr key={item.id}>
                      <td style={cellStyle}>{item.id}</td>
                      <td style={cellStyle}>{item.quantityInMl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p>Loading inventory data or no records found.</p>}
          </section>
        )}

        {/* Milk Donation Section */}
        {selectedSection === 'milk-donation' && (
          <section style={{ padding: 40 }}>
            <h2 style={{ color: '#2C5282', marginBottom: 20 }}>Milk Donation Records</h2>
            {donationData.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#2C5282', color: 'white' }}>
                  <tr>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Donor Name</th>
                    <th style={cellStyle}>Phone</th>
                    <th style={cellStyle}>Address</th>
                    <th style={cellStyle}>Date</th>
                    <th style={cellStyle}>Quantity (ml)</th>
                    <th style={cellStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donationData.map((donation) => (
                    <tr key={donation.id}>
                      <td style={cellStyle}>{donation.id}</td>
                      <td style={cellStyle}>{donation.donor?.name || 'N/A'}</td>
                      <td style={cellStyle}>{donation.donor?.phoneNo || 'N/A'}</td>
                      <td style={cellStyle}>{donation.address}</td>
                      <td style={cellStyle}>{donation.date}</td>
                      <td style={cellStyle}>{donation.quantity}</td>
                      <td style={cellStyle}>{donation.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p>Loading donation data or no records found.</p>}
          </section>
        )}

        {/* Milk Request Section */}
        {selectedSection === 'milk-request' && (
          <section style={{ padding: 40 }}>
            <h2 style={{ color: '#2C5282', marginBottom: 20 }}>Milk Request Records</h2>
            {requestData.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#2C5282', color: 'white' }}>
                  <tr>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Baby Name</th>
                    <th style={cellStyle}>Date of Birth</th>
                    <th style={cellStyle}>Parent Name</th>
                    <th style={cellStyle}>Phone No</th>
                    <th style={cellStyle}>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {requestData.map((request) => (
                    <tr key={request.id}>
                      <td style={cellStyle}>{request.id}</td>
                      <td style={cellStyle}>{request.babyName}</td>
                      <td style={cellStyle}>{request.dob}</td>
                      <td style={cellStyle}>{request.parentName}</td>
                      <td style={cellStyle}>{request.phoneNo}</td>
                      <td style={cellStyle}>{request.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p>Loading request data or no records found.</p>}
          </section>
        )}

        {/* Donate Money Section */}
        {selectedSection === 'donate-money' && (
          <section style={{ padding: 40 }}>
            <h2 style={{ color: '#2C5282', marginBottom: 20 }}>Donation Money Records</h2>
            {paymentData.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#2C5282', color: 'white' }}>
                  <tr>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Order ID</th>
                    <th style={cellStyle}>Email</th>
                    <th style={cellStyle}>Amount</th>
                    <th style={cellStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.map((payment) => (
                    <tr key={payment.id}>
                      <td style={cellStyle}>{payment.id}</td>
                      <td style={cellStyle}>{payment.orderId}</td>
                      <td style={cellStyle}>{payment.email}</td>
                      <td style={cellStyle}>{payment.amount}</td>
                      <td style={cellStyle}>{payment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p>Loading payment data or no records found.</p>}
          </section>
        )}

        {/* Users Section */}
        {selectedSection === 'users' && (
          <section style={{ padding: 40 }}>
            <h2 style={{ color: '#2C5282', marginBottom: 20 }}>Users List</h2>
            {usersData.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#2C5282', color: 'white' }}>
                  <tr>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Name</th>
                    <th style={cellStyle}>Email</th>
                    <th style={cellStyle}>Phone</th>
                    <th style={cellStyle}>Role</th>
                    <th style={cellStyle}>Blood Type</th>
                    <th style={cellStyle}>Any Disease</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((user) => (
                    <tr key={user.id}>
                      <td style={cellStyle}>{user.id}</td>
                      <td style={cellStyle}>{user.name}</td>
                      <td style={cellStyle}>{user.email}</td>
                      <td style={cellStyle}>{user.phoneNo}</td>
                      <td style={cellStyle}>{user.role}</td>
                      <td style={cellStyle}>{user.bloodType}</td>
                      <td style={cellStyle}>{user.anyDisease || 'None'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : <p>Loading users data or no records found.</p>}
          </section>
        )}

        {/* Default Dashboard */}
        {selectedSection === 'dashboard' && (
          <section style={{ padding: 40, textAlign: 'center' }}>
            <h2 style={{ color: '#2C5282', marginBottom: 5 }}>Today’s Milk Collection</h2>

            {/* Date Picker */}
            <div style={{ marginBottom: '20px' }}>
              <label><b>Date:</b></label>
              <input
                type="date"
                value={selectedDate}
                max={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            </div>

            {/* Milk Collection Table */}
            <table style={{ width: '50%', margin: '30px auto', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#2C5282', color: 'white' }}>
                  <th style={cellStyle}>Number of Units</th>
                  <th style={cellStyle}>Total Milk in ml</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>5</td>
                  <td style={cellStyle}>300</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
}

const linkStyle = {
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  transition: 'background 0.2s'
};

const cellStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  textAlign: 'center'
};

export default AdminDashboard;