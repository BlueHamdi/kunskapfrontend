import React from 'react';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F2F2F2', padding: '50px' }}>

      <h2 style={{ color: '#333' }}>Contact us</h2>

      <div style={{ display: 'inline-block', textAlign: 'left', marginTop: '40px' }}>

        <p style={{ fontSize: '18px' }}>

          <strong>Email:</strong> kunskapsvarvet@gmail.com
        </p>
        <p style={{ fontSize: '18px' }}>
          <strong>Phone:</strong> (46) xxxxxxxx
        </p>
        <p style={{ fontSize: '18px' }}>
          <strong>Address:</strong> Yrkeshögskola Newton
        </p>
        <p style={{ fontSize: '18px', marginTop: '30px' }}>
          For help, please email us at <a href="mailto:kunskapsvarvet@gmail.com" style={{ color: '#333' }}>kunskapsvarvet@help.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
