import React from 'react';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">#1 Water Cleaning Service</div>
          <h1>Experience the Purity of <span className="highlight-text">Clean Water</span></h1>
          <p>
            Professional water tank cleaning services for homes and businesses.
            We ensure your water storage is safe, reliable, and 100% bacteria-free.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
            <a href="#process" className="btn btn-outline">How it Works</a>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <div className="avatars">
                <img src="/images/avatar-1.png" alt="User" className="avatar" />
                <img src="/images/avatar-2.png" alt="User" className="avatar" />
                <img src="/images/avatar-3.png" alt="User" className="avatar" />
              </div>
              <span>Trusted by 2000+ homeowners</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/images/hero-splash.png" alt="Crystal clear water" className="main-image" />

            <div className="status-card">
              <span>Current Status</span>
              <strong>Eco-Friendly Cleaning</strong>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 80px 0;
          background: linear-gradient(to right, #f8fbff, #ffffff);
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .badge {
          display: inline-block;
          background: #e6f0ff;
          color: var(--primary-blue);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .hero-content h1 {
          font-size: 56px;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #0a1e3b;
        }
        .highlight-text {
          color: var(--primary-blue);
          display: block;
        }
        .hero-content p {
          font-size: 18px;
          margin-bottom: 32px;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }
        .btn-outline {
          background: transparent;
          border: 1px solid #ddd;
          color: var(--text-dark);
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
        }
        .btn-outline:hover {
          background: #f8f9fa;
        }
        .hero-image {
          position: relative;
        }
        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
        }
        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .status-card {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: white;
          padding: 16px 24px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          min-width: 200px;
        }
        .status-card span {
          display: block;
          font-size: 12px;
          color: var(--text-gray);
          margin-bottom: 4px;
        }
        .status-card strong {
          color: var(--text-dark);
          font-size: 16px;
        }
        
        .avatars {
          display: flex;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
          object-fit: cover;
        }
        .avatar:first-child {
          margin-left: 0;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content p, .hero-actions, .hero-trust {
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-content h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
