import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    service_type: 'Residential Tank Cleaning',
    tank_size: 'I\'m not sure',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    console.log('Submitting quote...', formData);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/submit-quote/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Thank you! Your quote request has been submitted successfully.');
        setFormData({
          full_name: '',
          phone_number: '',
          service_type: 'Residential Tank Cleaning',
          tank_size: 'I\'m not sure',
          description: ''
        });
      } else {
        setMessage('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact-grid">
          {/* Contact Info Side */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-cards">
              <div className="info-card">
                <div className="icon-circle bg-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="label">PHONE SUPPORT</span>
                  <div className="value">+91 9830406144</div>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-circle bg-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="label">EMAIL INQUIRIES</span>
                  <div className="value">aquazenix@gmail.com</div>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-circle bg-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="label">LOCATION</span>
                  <div className="value">
                    Kolkata Park-Street, West Bengal, India
                    <br />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Park+Street+Kolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--primary-blue)', fontSize: '13px', marginTop: '4px', display: 'inline-block' }}
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.062837330274!2d88.35027531495965!3d22.553994985191845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770555555555%3A0x5555555555555555!2sPark%20St%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1622534567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aquazenix Location"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            <p>Fill out the form below for a free quote. We typically respond within 2 hours.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="+91 9830406144"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Service Type</label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                  >
                    <option>Residential Tank Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Sump Cleaning</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Tank Size (Approx)</label>
                  <select
                    name="tank_size"
                    value={formData.tank_size}
                    onChange={handleChange}
                  >
                    <option>I'm not sure</option>
                    <option>500L - 1000L</option>
                    <option>1000L - 5000L</option>
                    <option>5000L+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>How can we help?</label>
                <textarea
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your water tank issue..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width">Request Free Quote</button>

              <div className="form-footer">
                <span>Licensed & Insured</span>
                <span>5-Star Rated Service</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
        }
        .contact-info h2 {
          margin-bottom: 32px;
        }
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
        }
        .icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          background: #f0f7ff;
        }
        .label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-gray);
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }
        .value {
          font-weight: 600;
          color: var(--text-dark);
        }
        .map-placeholder {
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
        }
        
        /* Form Styles */
        .contact-form-wrapper {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          border: 1px solid #eee;
        }
        .contact-form-wrapper h3 {
          margin-bottom: 8px;
        }
        .contact-form-wrapper p {
          font-size: 14px;
          margin-bottom: 32px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-dark);
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        .full-width {
          width: 100%;
        }
        .form-footer {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 24px;
          font-size: 12px;
          color: var(--text-gray);
        }
        
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
