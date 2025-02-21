import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-2">
      <div className="container">
        <p className="mb-0">© 2023 LYCEUM OF ALABANG. All rights reserved.</p>
        <p className="mb-0">Follow us on:
          <a href="https://facebook.com" className="text-white ms-2">Facebook</a> |
          <a href="https://twitter.com" className="text-white ms-2">Twitter</a> |
          <a href="https://instagram.com" className="text-white ms-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;