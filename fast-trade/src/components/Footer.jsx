import React from 'react';
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your App</p>
      </div>
    </footer>
  );
}

export default Footer;