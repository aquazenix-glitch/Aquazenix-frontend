import React from 'react';
import { Home, Building2, Warehouse, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={24} />,
      title: 'Residential Tanks',
      description: 'Complete mechanized cleaning and UV disinfection for home overhead tanks and lofts.',
      features: ['6-Step Process', 'Sludge Removal'],
      bg: 'white',
      textColor: 'text-dark'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Commercial Solutions',
      description: 'Large-scale cleaning for office buildings, apartments, and industrial complexes.',
      features: ['AMC Packages', 'Certified Reports'],
      bg: 'primary',
      textColor: 'white'
    },
    {
      icon: <Warehouse size={24} />,
      title: 'Sump Cleaning',
      description: 'Deep cleaning, dewatering, and sludge removal for underground sumps of all sizes.',
      features: ['Vacuum Technology', 'Anti-bacterial Spray'],
      bg: 'white',
      textColor: 'text-dark'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Expertise</span>
          <h2>Comprehensive Cleaning Solutions</h2>
          <p>We offer specialized cleaning for every type of water storage system.</p>
          <a href="/services" className="view-all">View All Services <ArrowRight size={16} /></a>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.bg === 'primary' ? 'bg-primary' : 'bg-white'}`}
            >
              <div className={`service-icon-box ${service.bg === 'primary' ? 'icon-light' : 'icon-primary'}`}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-link">Learn more</button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: #f8faff;
        }
        .section-header {
          margin-bottom: 48px;
          position: relative;
        }
        .section-header .view-all {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--primary-blue);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        .service-card {
          padding: 32px;
          border-radius: 16px;
          transition: transform 0.3s ease;
          border: 1px solid #eee;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .bg-white {
          background: white;
        }
        .bg-primary {
          background: var(--primary-blue);
          color: white;
          border: none;
        }
        .bg-primary h3, .bg-primary p {
          color: white;
        }
        .bg-primary .btn-link {
          color: white;
          text-decoration: underline;
        }
        .bg-primary .feature-icon {
           color: white;
        }
        .service-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .icon-primary {
          background: #e6f0ff;
          color: var(--primary-blue);
        }
        .icon-light {
          background: rgba(255,255,255,0.2);
          color: white;
        }
        .service-features {
          list-style: none;
          margin: 24px 0;
        }
        .service-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 500;
        }
        .bg-white .feature-icon {
          color: #10B981; /* Green check */
        }
        .btn-link {
          background: none;
          border: none;
          padding: 0;
          color: var(--primary-blue);
          font-weight: 600;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .section-header .view-all {
            position: relative;
            transform: none;
            margin-top: 16px;
            display: inline-flex;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
