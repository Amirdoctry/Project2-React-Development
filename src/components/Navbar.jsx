import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2 className="logo-text">Shortly</h2>
      </div>

      {/* Hamburger menu button for mobile */}
      <button 
        className="hamburger-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="nav-left">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>
        <div className="nav-right">
          <a href="#login" className="login-btn">Login</a>
          <a href="#signup" className="signup-btn">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}