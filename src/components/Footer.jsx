import React from 'react';
import { Droplet, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src="/images/logo.png" alt="Aquazenix Logo" className="logo-icon" style={{ height: '40px', width: 'auto' }} />
              <span className="logo-text">Aquazenix</span>
            </div>
            <p>Professional water tank cleaning services committed to delivering safe, hygienic, and crystal clear water to your home and business.</p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Residential</a></li>
                <li><a href="#">Commercial</a></li>
                <li><a href="#">Testing</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Aquazenix. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          background: #ffffff;
          padding: 80px 0 32px;
          border-top: 1px solid #eee;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }
        .footer-brand p {
          max-width: 300px;
          margin: 24px 0;
          font-size: 14px;
        }
        .social-links {
          display: flex;
          gap: 16px;
        }
        .social-links a {
          color: var(--text-gray);
        }
        .social-links a:hover {
          color: var(--primary-blue);
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .footer-column h4 {
          font-size: 14px;
          margin-bottom: 24px;
        }
        .footer-column ul {
          list-style: none;
        }
        .footer-column ul li {
          margin-bottom: 12px;
        }
        .footer-column ul li a {
          color: var(--text-gray);
          font-size: 14px;
        }
        .footer-column ul li a:hover {
          color: var(--primary-blue);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 32px;
          border-top: 1px solid #eee;
          color: var(--text-gray);
          font-size: 13px;
        }
        
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
