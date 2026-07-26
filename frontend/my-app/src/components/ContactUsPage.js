import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in required fields.');
      return;
    }
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const iconStyle = { fontSize: 40, marginBottom: 10, color: '#2C5282' };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2C5282', textAlign: 'center', marginBottom: 10 }}>Get in Touch</h1>
      <p style={{ textAlign: 'center', marginBottom: 40, color: '#555' }}>
        We're here to answer your questions and assist you. Reach out to us through any of the following channels.
      </p>

      {/* Contact Info Cards */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: 20, marginBottom: 40, flexWrap: 'wrap' }}>
        {[
          {
            icon: '📞',
            title: 'Phone Number',
            info: '(123) 456-7890',
            note: 'Call us during business hours (Mon–Fri, 9 AM – 5 PM).',
          },
          {
            icon: '✉',
            title: 'Email Address',
            info: 'info@mothermilkbank.org',
            note: 'We aim to respond to all inquiries within 24 hours.',
          },
          {
            icon: '📍',
            title: 'Our Location',
            info: '123 Milk Way, Lactation City, 98765',
            note: 'Visits by appointment only. Please contact us to schedule.',
          },
        ].map(({ icon, title, info, note }) => (
          <div
            key={title}
            style={{
              flex: '1 1 250px',
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 20,
              textAlign: 'center',
              boxShadow: '0 0 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0,0,0,0.05)';
            }}
          >
            <div style={iconStyle}>{icon}</div>
            <h3 style={{ margin: '10px 0' }}>{title}</h3>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{info}</p>
            <small style={{ color: '#777' }}>{note}</small>
          </div>
        ))}
      </div>

      {/* Message Form */}
      <div style={{ backgroundColor: '#f9f9f9', padding: 30, borderRadius: 8, maxWidth: 700, margin: '0 auto 40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 10 }}>Send Us a Message</h2>
        <p style={{ textAlign: 'center', marginBottom: 20 }}>Have a question or need assistance? Fill out the form below and we'll get back to you shortly.</p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                flex: '1 1 300px',
                padding: 10,
                borderRadius: 4,
                border: '1px solid #ccc',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2C5282';
                e.target.style.boxShadow = '0 0 5px rgba(44,82,130,0.5)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ccc';
                e.target.style.boxShadow = 'none';
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                flex: '1 1 300px',
                padding: 10,
                borderRadius: 4,
                border: '1px solid #ccc',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2C5282';
                e.target.style.boxShadow = '0 0 5px rgba(44,82,130,0.5)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ccc';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: '1px solid #ccc',
              marginBottom: 20,
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2C5282';
              e.target.style.boxShadow = '0 0 5px rgba(44,82,130,0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ccc';
              e.target.style.boxShadow = 'none';
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{
              width: '100%',
              padding: 10,
              borderRadius: 4,
              border: '1px solid #ccc',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2C5282';
              e.target.style.boxShadow = '0 0 5px rgba(44,82,130,0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ccc';
              e.target.style.boxShadow = 'none';
            }}
          />
          <div style={{ textAlign: 'center', marginTop: 25 }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#2C5282',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                padding: '12px 30px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1A365D';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#2C5282';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Send Message
            </button>
            {status && <p style={{ marginTop: 20 }}>{status}</p>}
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <footer style={{ display: 'flex', justifyContent: 'center', gap: 30, marginTop: 60, paddingBottom: 20, color: '#999' }}>
        <a href="/" style={{ color: '#999', textDecoration: 'none' }}>About Us</a>
        <a href="/" style={{ color: '#999', textDecoration: 'none' }}>Home</a>
      </footer>
    </div>
  );
};

export default ContactUs;