import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-details">
        <p><strong>Email:</strong> Kunskapsvarvet@gmail.com</p>
        <p><strong>Phone:</strong> (46) xxx-xxxx</p>
        <p><strong>Address:</strong> Yrkeshögskola Newton</p>
        <p className="contact-help-text">For help, please email us at <a href="mailto:kunskapsvarvet@help.com" className="contact-help-link">kunskapsvarvet@help.com</a></p>
      </div>
    </div>
  );
};

export default Contact;