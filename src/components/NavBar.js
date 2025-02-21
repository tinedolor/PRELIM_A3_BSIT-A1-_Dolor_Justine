import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://lyceumalabang.edu.ph/wp-content/uploads/2023/07/logo.png"
            style={{width: '60px', height: '60px'}}
            className="d-inline-block align-top me-2"
          />
          LYCEUM OF ALABANG
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">📖 About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">📞 Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;