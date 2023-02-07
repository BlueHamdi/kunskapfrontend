import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-info-container">
      <h2 className="contact-info-header">Contact Us</h2>
      <div className="contact-info-details">
        <p><strong>Email:</strong> Kunskapsvarvet@gmail.com</p>
        <p><strong>Phone:</strong> (46) xxx-xxxx</p>
        <p><strong>Address:</strong> Yrkeshögskola Newton</p>
        <p className="contact-info-support-text">For help, please email us at <a href="mailto:kunskapsvarvet@help.com" className="contact-info-support-link">kunskapsvarvet@help.com</a></p>
      </div>
    </div>
  );
};

export default Contact;