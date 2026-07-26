import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LuMilk,
  LuClipboardCheck,
  LuCreditCard,
  LuUser,
  LuChevronRight,
  LuLogOut
} from 'react-icons/lu';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UsersDashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName'); // Clear stored name
    navigate('/login');
  };

  return (
    <div className="container py-5">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Welcome, {userName} 👋</h2>
        <button onClick={handleLogout} className="btn btn-danger d-flex align-items-center">
          <LuLogOut className="me-2" />
          Log Out
        </button>
      </div>

      <p className="text-muted text-center mb-5">
        From here, you can interact with the MotherBank platform. Please select an option below to get started.
      </p>

      {/* Dashboard Cards Grid */}
      <div className="row g-4">
        {/* Donate Milk */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white bg-success h-100 shadow-sm border-0"
            role="button"
            onClick={() => navigate('/donate-milk')}
          >
            <div className="card-body text-center">
              <LuMilk size={48} className="mb-3" />
              <h5 className="card-title fw-bold">Donate Milk</h5>
              <p className="card-text small">
                Start your milk donation <LuChevronRight size={16} />
              </p>
            </div>
          </div>
        </div>

        {/* Request Milk */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white bg-primary h-100 shadow-sm border-0"
            role="button"
            onClick={() => navigate('/request-milk')}
          >
            <div className="card-body text-center">
              <LuClipboardCheck size={48} className="mb-3" />
              <h5 className="card-title fw-bold">Request Milk</h5>
              <p className="card-text small">
                Make a milk request <LuChevronRight size={16} />
              </p>
            </div>
          </div>
        </div>

        {/* Donate Money */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white h-100 shadow-sm border-0"
            style={{ backgroundColor: '#6f42c1' }}
            role="button"
            onClick={() => navigate('/donate-money')}
          >
            <div className="card-body text-center">
              <LuCreditCard size={48} className="mb-3" />
              <h5 className="card-title fw-bold">Donate Money</h5>
              <p className="card-text small">
                Make a monetary donation <LuChevronRight size={16} />
              </p>
            </div>
          </div>
        </div>

        {/* Donor Info */}
        <div className="col-md-6 col-lg-3">
          <div
            className="card text-white bg-warning h-100 shadow-sm border-0"
            role="button"
            onClick={() => navigate('/donor-information')}
          >
            <div className="card-body text-center">
              <LuUser size={48} className="mb-3" />
              <h5 className="card-title fw-bold">Donor Info</h5>
              <p className="card-text small">
                View your profile <LuChevronRight size={16} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
