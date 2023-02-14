import axios from "axios";
import React, { useState, useEffect } from "react";
import './Contact.css';


function Contact() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/contact")
        .then(response => {
          console.log(response.data.Contact);
          setPosts(response.data.Contact);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    

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