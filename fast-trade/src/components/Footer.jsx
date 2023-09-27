import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} FastTrade</p>
      </div>
    </footer>
  );
}

export default Footer;