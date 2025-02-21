import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title">Contact Us</h1>
          <p className="card-text">We’d love to hear from you! Reach out to us using the details below:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">📧 Email: info@lyceum.edu.ph</li>
            <li className="list-group-item">📞 Phone: +63 123 456 7890</li>
            <li className="list-group-item">📍 Address: Alabang, Muntinlupa City, Philippines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact; // Ensure this is a default export