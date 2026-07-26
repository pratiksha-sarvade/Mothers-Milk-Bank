import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; 
import RegisterImg from '../Img/Register.jpg'; // Assuming this is the hero image


export default function HomePage() {
  const testimonials = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1771&auto=format&fit=crop", 
      name: "Sudeshna",
      title: "Donor Mother, Software Engineer",
      quote: "Determined to put her milk to use for saving preterm babies, I diligently collected and stored 12 liters, which I sent to the milk bank."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Anjali Sharma",
      title: "Recipient Mother",
      quote: "When my baby was born prematurely, donated breast milk was a lifesaver. My baby thrived because of it. Forever grateful for this vital support!"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557862921-37829c790f51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dr. Rohan Mehta",
      title: "Neonatologist",
      quote: "As a neonatologist, I regularly recommend donated human milk for our most vulnerable patients due to its immense health benefits."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Singh",
      title: "Community Volunteer",
      quote: "Being a part of this cause is incredibly rewarding. The dedication to helping vulnerable infants is truly inspiring."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rahul Khanna",
      title: "Hospital Administrator",
      quote: "The partnership with the Milk Bank is crucial for our NICU. Their high standards ensure safe and essential nutrition for our tiniest patients."
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      }
    ]
  };

  // Inline SVG icons (UPDATED BabyIcon SVG path for robustness)
  const BabyIcon = ({ color, size = '2.5em' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} className="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  );

  const HeartIcon = ({ color, size = '2.5em' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} className="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.736 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>
  );

  const ShieldCheckIcon = ({ color, size = '2.5em' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} className="bi bi-shield-check-fill" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.567-1.112.322-2.176.717-2.928 1.007-.758.298-1.348.652-1.652.945-.309.299-.355.339-.355.339A1.5 1.5 0 0 0 0 2.834V10.5c0 .773.347 1.434.872 2.007.45.495 1.052.936 1.757 1.302C4.913 15.17 6.516 16 8 16s3.087-.83 4.371-1.691c.705-.366 1.307-.807 1.757-1.302.525-.573.872-1.234.872-2.007V2.834c0-.625-.373-1.18-.834-1.472l-.005-.003-.005-.004A3.5 3.5 0 0 0 12.072.567C10.988.265 9.83 0 8 0m2.854 5.354a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
    </svg>
  );


  return (
    <div>
      {/* New Hero Section */}
      <div className="container-fluid bg-light py-5" style={{ minHeight: '600px', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#2C5282' }}>
                Nourishing Lives, One Drop at a Time
              </h1>
              <p className="lead mb-4" style={{ color: '#333333' }}>
                The Mother Milk Bank is dedicated to providing safe, pasteurized donor human milk to vulnerable infants,
                supporting mothers, and promoting the health and well-being of the next generation.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <Link to="/how-to-donate" className="btn btn-primary btn-lg shadow-sm" style={{ backgroundColor: '#2C5282', borderColor: '#2C5282' }}>
                  Join Our Mission
                </Link>
                <Link to="/contact-us" className="btn btn-outline-secondary btn-lg shadow-sm" style={{ color: '#2C5282', borderColor: '#2C5282' }}> {/* Themed button */}
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={RegisterImg}
                alt="Mother and baby"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      

      {/* Cards Section */}
    
{/* Cards Section */}
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <img
          src="https://www.parents.com/thmb/qy0Gpxnh2XZz-_YDTAR4x5XQpVA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Parents-GettyImages-466457197-eafc555453ef4e869337887b0fcdf192.jpg"
          className="card-img-top"
          alt="Card 1"
          style={{ height: '300px', objectFit: 'cover' ,width: '100%'}} 
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#2C5282' }}>Stocks</h5>
          <p className="card-text" style={{ fontSize: '0.9rem', color: '#5A5A5A' }}></p>
          {/* Changed <a> to <Link> and set the 'to' prop to the correct route */}
          <Link to="/donate-milk" className="btn btn-primary" style={{ backgroundColor: '#2C5282', borderColor: '#2C5282' }}>MILK DONOR</Link>
        </div>
      </div>
    </div>
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <img
          src="https://media.istockphoto.com/id/1277476795/photo/asian-parents-with-newborn-baby-closeup-portrait-of-asian-young-couple-father-mother-holding.jpg?s=612x612&w=0&k=20&c=9HI26nRvp3eLbstF6y0Qd8DFvRsb70WmVwK0RNJdX6U="
          className="card-img-top"
          alt="Card 2"
          style={{ height: '300px', objectFit: 'cover',width: '100%' }} 
        />
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#2C5282' }}>Support New Mothers</h5>
          <p className="card-text" style={{ fontSize: '0.9rem', color: '#5A5A5A' }}>
            Your support helps mothers give babies a healthy start in life.
          </p>
          {/* Changed <a> to <Link> and set the 'to' prop to the correct route */}
          <Link to="/donate-money" className="btn btn-primary" style={{ backgroundColor: '#2C5282', borderColor: '#2C5282' }}>DONATE MONEY</Link>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Mission & Impact */}
      <div className="text-center my-5">
        <h1 className="ekit-heading--title elementskit-section-title" style={{ color: '#2C5282' }}>Mission &amp; Impact</h1> {/* Themed title */}
        <p className="lead" style={{ color: '#333333' }}> {/* Themed text */}
          Mothers’ Milk Bank of India is a special nonprofit organization that helps save the lives of sick and premature babies by giving them safe, donated breast milk. Since it started, the bank has been collecting, cleaning (pasteurizing), and giving out donated milk to hospitals and families who need it most.
        </p>
      </div>

      {/* Benefits of Donor Milk Section (UPDATED with Inline SVGs) */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#2C5282' }}>Benefits of Donor Milk</h2>
        <p className="text-center lead mb-5" style={{ color: '#555' }}>Supporting Health, Growth, and Community</p>
        <div className="row justify-content-center text-center">
          {[
            {
              iconComponent: BabyIcon, // Using the new, more robust BabyIcon
              title: 'For Babies',
              desc: 'Provides essential nutrients, antibodies, and aids development, especially for vulnerable infants.',
            },
            {
              iconComponent: HeartIcon, 
              title: 'For Donors',
              desc: 'An opportunity to help others, process excess milk, and contribute to a vital cause.',
            },
            {
              iconComponent: ShieldCheckIcon, 
              title: 'Safety & Quality',
              desc: 'Rigorous screening and pasteurization ensure the highest safety standards for all donated milk.',
            },
          ].map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div 
                className="p-4 rounded-3 h-100 d-flex flex-column align-items-center benefit-card" 
                style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e9ecef', 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
                }}
              >
                <div className="icon-circle mb-3" style={{ 
                  backgroundColor: '#e0f2f7', 
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  border: '1px solid #cce7f0' 
                }}>
                  {/* Render the SVG component directly */}
                  <item.iconComponent color="#4A90E2" size="2.5em" /> 
                </div>
                <h3 className="fw-bold mb-2" style={{ color: '#2C5282' }}>{item.title}</h3>
                <p style={{ color: '#555' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <section style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 className="fw-bold mb-3" style={{ color: '#2C5282' }}>How It Works</h2>
        <p className="lead mb-5" style={{ color: '#555' }}>A Simple Process to Make a Profound Impact</p>
        <div className="row justify-content-center">
          {[
            {
              step: '1',
              title: 'Express & Store',
              desc: 'Express your milk and store it safely according to guidelines.',
            },
            {
              step: '2',
              title: 'Screening Process',
              desc: 'Undergo a simple screening to ensure eligibility and safety.',
            },
            {
              step: '3',
              title: 'Collection & Transport',
              desc: 'Milk is collected and transported securely to the milk bank.',
            },
            {
              step: '4',
              title: 'Processing & Distribution',
              desc: 'Milk is pasteurized and prepared for distribution to hospitals.',
            },
          ].map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div 
                className="p-4 rounded-3 h-100 d-flex flex-column align-items-center how-it-works-card" 
                style={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e9ecef', 
                  boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
                }}
              >
                <div
                  className="step-circle mb-3"
                  style={{
                    backgroundColor: '#2C5282',
                    color: 'white',
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%',
                    margin: '0 auto 15px',
                    fontWeight: 'bold',
                    fontSize: '1.5em', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                >
                  {item.step}
                </div>
                <h4 className="fw-bold mb-2" style={{ color: '#2C5282' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Testimonials Section - using react-slick */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#2C5282' }}>What Our Community Says</h2> {/* Themed heading */}
        <div className="slick-slider-container">
          <Slider {...sliderSettings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-slide-wrapper">
                <div className="card testimonial-slick-card text-center p-4 shadow-sm" style={{ borderRadius: '15px' }}>
                  <div className="card-body d-flex flex-column justify-content-between align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mb-3"
                      style={{ width: '100px', height: '100px', objectFit: 'cover', border: '3px solid #2C5282', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }} 
                    />
                    <div>
                      <h5 className="card-title mb-1 fw-bold" style={{ color: '#2C5282' }}>{testimonial.name}</h5> {/* Themed name */}
                      <p className="card-subtitle mb-3" style={{ fontSize: '0.9rem', color: '#555' }}>{testimonial.title}</p> {/* Themed title text */}
                    </div>
                    <p className="card-text fst-italic" style={{ color: '#333' }}> {/* Themed quote text */}
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Call to Action */}
      <section style={{ backgroundColor: '#2C5282', padding: 40, borderRadius: 8, color: 'white', textAlign: 'center', marginTop: 60 }}>
        <h2 className="fw-bold mb-3">Ready to Make a Difference?</h2>
        <p className="lead mb-4 text-white">
  Your generosity can provide critical nutrition and immunity to fragile infants. Learn more about how you can become a part of our life-saving mission.
</p>
        <div style={{ marginTop: 20 }}>
          <Link to="/signup"
            className="btn btn-lg shadow-sm me-3"
            style={{
              backgroundColor: 'white',
              color: '#2C5282',
              border: 'none',
              padding: '12px 30px',
              borderRadius: 25,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease', // Added transition
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Hover effect
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset effect
          >
            Become a Donor Today
          </Link>
          <Link to="/contact-us"
            className="btn btn-lg shadow-sm"
            style={{
              backgroundColor: 'white',
              color: '#2C5282',
              border: 'none',
              padding: '12px 30px',
              borderRadius: 25,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease', // Added transition
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Hover effect
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset effect
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
