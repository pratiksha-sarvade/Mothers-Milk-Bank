import React from 'react';
import babyImg from '../Img/baby.png';
import milkprocess from '../Img/milkprocess.png';
import { Link } from 'react-router-dom'; // It's good practice to use Link for internal navigation
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure you have this import for the icons

function HowToDonate() {
  const primaryColor = '#2C5282'; // Defining the primary color for consistency

  return (
    <div className="container my-5">

      {/* Header Section */}
      <header className="p-4 rounded-4 shadow-sm mb-5" style={{ backgroundColor: '#E6EDF8' }}>
        <h1 className="text-center fw-bold" style={{ color: primaryColor }}>Empower a Life: Your Milk Matters</h1>
        <p className="lead text-center text-muted mb-0">
          Discover how you can provide a life-saving gift to fragile infants through the power of human milk donation. Every ounce makes a profound difference.
        </p>
      </header>

      {/* Are You an Eligible Donor Section */}
      <section className="row align-items-center mb-5 gx-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3" style={{ color: primaryColor }}>Are You an Eligible Donor?</h2>
          <p className="text-muted">
            To ensure the utmost safety and quality of donor milk, all potential donors undergo a comprehensive screening process. Your health and the health of the recipient are our top priorities.
          </p>
          <ul className="list-unstyled text-muted">
            <li className="d-flex align-items-start mb-2">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <span>Be in good general health and not regularly taking certain medications.</span>
            </li>
            <li className="d-flex align-items-start mb-2">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <span>Be a non-smoker and not use illicit drugs.</span>
            </li>
            <li className="d-flex align-items-start mb-2">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <span>Have a valid photo ID and provide medical history details.</span>
            </li>
            <li className="d-flex align-items-start mb-2">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <span>Be willing to undergo a simple, no-cost blood test.</span>
            </li>
            <li className="d-flex align-items-start mb-2">
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <span>Have a surplus of breast milk after meeting your baby's needs.</span>
            </li>
          </ul>
          <p className="mt-4">
            Ready to find out if you qualify? Visit our <Link to="/contact-us" style={{ color: primaryColor, textDecoration: 'none' }}>Contact Us</Link> section to speak with a donor coordinator.
          </p>
        </div>
        <div className="col-lg-6">
          <img src={babyImg} alt="Healthy baby" className="img-fluid rounded-4 shadow-lg" />
        </div>
      </section>

      {/* The Simple Steps to Donate Section */}
      <section className="row align-items-center mb-5 gx-5 flex-lg-row-reverse">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3" style={{ color: primaryColor }}>The Simple Steps to Donate</h2>
          <p className="text-muted">
            We've made the milk donation process as straightforward as possible, ensuring convenience for our generous donors while maintaining strict safety standards.
          </p>
          <ol className="list-group list-group-numbered ps-3">
            <li className="list-group-item border-0 p-0 mb-3">
              <b>Initial Inquiry & Screening:</b> Begin by contacting us. We'll guide you through a health questionnaire and an initial medical review to confirm your eligibility.
            </li>
            <li className="list-group-item border-0 p-0 mb-3">
              <b>Blood Test:</b> A confidential blood test, covered by the milk bank, is conducted to screen for infectious diseases, ensuring the milk's safety.
            </li>
            <li className="list-group-item border-0 p-0 mb-3">
              <b>Milk Collection:</b> Once approved, you’ll receive guidelines and supplies for safe milk expression and storage at home, at your convenience.
            </li>
            <li className="list-group-item border-0 p-0 mb-3">
              <b>Shipment or Drop-off:</b> You can either ship your milk using our provided pre-paid materials or drop it off at a designated collection center.
            </li>
            <li className="list-group-item border-0 p-0 mb-3">
              <b>Pasteurization & Distribution:</b> Your donated milk undergoes rigorous pasteurization and testing before it is safely distributed to hospitals and families in need.
            </li>
          </ol>
        </div>
        <div className="col-lg-6">
          <img src={milkprocess} alt="Milk collection process" className="img-fluid rounded-4 shadow-lg" />
        </div>
      </section>

      {/* Eligibility Criteria Section (already using Bootstrap, so just made minor style adjustments) */}
      <section className="card p-5 shadow-lg rounded-4 border-0 mx-auto mb-5" style={{ maxWidth: '800px', backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: primaryColor }}>Eligibility Criteria for Donors</h2>
        <p className="lead text-center text-muted mb-5">
          To ensure the safety and quality of donated milk, we adhere to strict eligibility guidelines.
          Please review the criteria below.
        </p>
        <ul className="list-unstyled">
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Be in good general health and feeling well. Minor illnesses like a cold are usually acceptable, but please consult with us.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Be a non-smoker and not use nicotine products of any kind.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Not be regularly taking certain medications. Our screening process will review all medications.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Not have received an organ or tissue transplant in the last 12 months.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Not have a positive test result for HIV, Hepatitis B, Hepatitis C, or HTLV. All donors are screened for these viruses.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Be willing to undergo blood tests to ensure milk safety. These tests are at no cost to you.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Be able to provide a minimum of 100 ounces of milk initiality, and ideally continue donating regularly.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Follow dietary guidelines provided by the milk bank to ensure milk quality and safety.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Complete a thorough medical and lifestyle history questionnaire.</span>
          </li>
          <li className="mb-3 d-flex align-items-start">
            <i className="bi bi-check-circle-fill text-success me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
            <span>Be willing to store and transport milk according to our guidelines.</span>
          </li>
        </ul>
      </section>
      

      {/* Your Generosity Changes Lives Section */}
      <section className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ color: primaryColor }}>Your Generosity Changes Lives</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: 800 }}>
          Donating breast milk is a selfless act that provides profound benefits, extending hope and health to the most vulnerable infants and their families.
        </p>
        <div className="row justify-content-center g-4 mt-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#E6EDF8' }}>
              <h3 className="fw-bold fs-5 mb-2" style={{ color: primaryColor }}>Life-Saving Nutrition</h3>
              <p className="text-muted">
                Donor milk provides essential nutrients, antibodies, and growth factors critical for the development of premature and ill infants.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#E6EDF8' }}>
              <h3 className="fw-bold fs-5 mb-2" style={{ color: primaryColor }}>Reduced Health Risks</h3>
              <p className="text-muted">
                It significantly reduces the risk of serious complications like necrotizing enterocolitis (NEC) in fragile newborns.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#E6EDF8' }}>
              <h3 className="fw-bold fs-5 mb-2" style={{ color: primaryColor }}>Community Support</h3>
              <p className="text-muted">
                Your donation supports families during challenging times, offering peace of mind and vital nourishment when mothers cannot provide their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <section className="text-center pt-4">
        <p className="lead">Ready to make a difference? Join our network of incredible donors today.</p>
        <Link 
          to="/donate-milk" 
          className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg" 
          style={{ background: `linear-gradient(to right, ${primaryColor}, #4A90E2)`, border: 'none' }}
        >
          Start Your Donation Today
        </Link>
      </section>

    </div>
  );
}

export default HowToDonate;