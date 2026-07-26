import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DonorInformationPage() {
  return (
    <div className="container my-5">
      <div className="card p-5 shadow-lg rounded-4 border-0 mx-auto" style={{ maxWidth: '800px', backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#2C5282' }}>Eligibility Criteria for Donors</h2>
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
      </div>
    </div>
  );
}
