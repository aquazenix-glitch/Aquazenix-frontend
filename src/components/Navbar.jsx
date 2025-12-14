import React, { useState } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Aquazenix Logo" className="logo-icon" style={{ height: '40px', width: 'auto' }} />
          <span className="logo-text">Aquazenix</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions desktop-only">
          <button className="btn btn-primary">Get Quote</button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="btn btn-primary full-width">Get a Quote</button>
        </div>
      )}

      <style>{`
        .navbar {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 16px 0;
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-dark);
          font-weight: 800;
          font-size: 24px;
        }
        .logo-icon {
          color: var(--primary-blue);
        }
        .nav-links {
          display: flex;
          gap: 32px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .nav-links a:hover {
          color: var(--primary-blue);
        }
        .mobile-toggle {
          display: none;
          cursor: pointer;
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 20px;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
        }
        .full-width {
          width: 100%;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
