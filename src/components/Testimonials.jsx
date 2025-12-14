import React from 'react';
import Slider from 'react-slick';
import { Star, Building2, MapPin } from 'lucide-react';

const Testimonials = () => {
  const clients = [
    { name: 'The Crown', location: 'Beliaghata', text: 'Aquazenix provided exceptional tank cleaning service. Their 6-stage process really made a difference in our water quality.' },
    { name: 'Aspira Starwood', location: 'Chinar Park', text: 'Professional, punctual, and thorough. We highly recommend Aquazenix for large apartment complexes.' },
    { name: 'Purti Aqua', location: 'Rajarhat', text: 'Fantastic service! The team was well-equipped and finished the job efficiently without any hassle.' },
    { name: 'Ideal Unique Residents', location: 'Sri Arabinda Sarani', text: 'We have been using their annual maintenance service, and the water tank hygiene has improved significantly.' },
    { name: 'Rameshwara River View', location: 'Barrackpore', text: 'Great attention to detail. The sludge removal and UV treatment gave us peace of mind.' },
    { name: 'Eastern Railways', location: 'Koilaghat Building, BBD Bagh', text: 'Reliable partners for commercial tank maintenance. Always compliant with safety standards and timely delivery.' },
    { name: 'Eastern Railway', location: 'Fairley Building, BBD Bagh', text: 'Efficient mechanized cleaning service suited for large-scale administrative buildings. Very professional.' },
    { name: 'Haldia Coast Guard', location: 'Haldia', text: 'Outstanding service quality. Their mechanized cleaning ensures safety and hygiene for our facilities.' },
    { name: 'Prudent Prana', location: 'Garia', text: 'The best tank cleaning service in Kolkata. Their team is polite and leaves the premises clean after work.' },
    { name: 'Amaya Residency', location: 'Rajpur', text: 'Timely and transparent service. They explain the entire process and provide before-after photos.' },
    { name: 'South City Project Management Pvt Ltd', location: 'Chemrail', text: 'High standards of professionalism. We trust Aquazenix for our project maintenance needs.' },
    { name: 'Primarc Akriti', location: 'Burdwan', text: 'Very impressive technology. The mechanised cleaning system is far superior to traditional methods.' },
    { name: 'Calcutta Club Ltd', location: 'Exide', text: 'A premium service for a premium establishment. Aquazenix delivers exactly what they promise.' },
    { name: 'Sabuj Swapna', location: 'Mankundu', text: 'Value for money service. The difference in water clarity was noticeable immediately.' },
    { name: 'Merlin Warden Lake View', location: 'Bidhannagar', text: 'Prompt and reliable. Their subscription plans are great for hassle-free regular maintenance.' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Valued Clients</h2>
          <p>See what our trusted partners have to say about our service.</p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="slider-item">
                <div className="client-card">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                  <p className="review-text">"{client.text}"</p>

                  <div className="client-info-wrapper">
                    <div className="icon-box">
                      <Building2 size={20} color="var(--primary-blue)" />
                    </div>
                    <div className="client-info">
                      <h4 className="client-name">{client.name}</h4>
                      <div className="client-location">
                        <MapPin size={12} />
                        <span>{client.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style>{`
        /* Slider Tweaks */
        .slider-container {
          margin: 0 -12px;
          padding: 20px 0;
        }
        .slider-item {
          padding: 0 12px;
          height: 100%;
        }
        
        .client-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 1px solid #eee;
          display: flex;
          flex-direction: column;
          height: 100%; /* Ensure equal height */
          min-height: 280px;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .client-card {
            padding: 20px;
            min-height: auto;
          }
          .slider-container {
            margin: 0 -8px;
          }
          .slider-item {
            padding: 0 8px;
          }
        }
        
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }
        
        .review-text {
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 24px;
          flex-grow: 1;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .client-info-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          border-top: 1px solid #f0f0f0;
          padding-top: 20px;
        }
        
        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f0f7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .client-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 2px 0;
        }
        
        .client-location {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: var(--text-gray);
        }

        /* Slick Dots Customization */
        .slick-dots li button:before {
            font-size: 10px;
            color: #ddd;
        }
        .slick-dots li.slick-active button:before {
            color: var(--primary-blue);
        }
        .slick-dots {
            bottom: -35px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
