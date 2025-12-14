import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Home, Building2, Warehouse, Droplet, Trash2, Zap, Wind, Sun, ShieldCheck } from 'lucide-react';

const ServicesPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const processSteps = [
        { icon: <Droplet size={24} />, title: 'Dewatering', desc: 'Pumping existing water' },
        { icon: <Trash2 size={24} />, title: 'Sludge Removal', desc: 'Suction of dirt & mud' },
        { icon: <Zap size={24} />, title: 'High Pressure', desc: 'Jet cleaning walls' },
        { icon: <Wind size={24} />, title: 'Vacuuming', desc: 'Removing remaining dirt' },
        { icon: <Sun size={24} />, title: 'UV Sterilization', desc: 'Killing bacteria' },
        { icon: <ShieldCheck size={24} />, title: 'Anti-bacterial Spray', desc: 'Final sanitization' },
    ];

    return (
        <div className="services-page">
            <Navbar />
            <div className="page-header">
                <div className="container">
                    <h1>Our Services & Process</h1>
                    <p>Detailed breakdown of our professional cleaning standards.</p>
                </div>
            </div>

            <div className="container page-content">
                {/* Residential Section */}
                <div className="service-detail-section" id="residential">
                    <div className="service-header">
                        <div className="icon-box bg-blue-light">
                            <Home size={32} color="var(--primary-blue)" />
                        </div>
                        <div>
                            <h2>Residential Tank Cleaning</h2>
                            <p>For Apartments, Bungalows, and Housing Societies</p>
                        </div>
                    </div>
                    <div className="service-body">
                        <p>Our residential service ensures your family uses 100% hygienic water. We use food-grade cleaning agents and high-end German machinery to remove years of sediment and bacteria.</p>
                        <h3>Our 6-Stage Process</h3>
                        <div className="process-grid">
                            {processSteps.map((step, index) => (
                                <div key={index} className="process-card">
                                    <div className="step-num">{index + 1}</div>
                                    <div className="p-icon">{step.icon}</div>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="divider" />

                {/* Commercial Section */}
                <div className="service-detail-section" id="commercial">
                    <div className="service-header">
                        <div className="icon-box bg-blue-light">
                            <Building2 size={32} color="var(--primary-blue)" />
                        </div>
                        <div>
                            <h2>Commercial Solutions</h2>
                            <p>For Offices, Malls, Hospitals, and Educational Institutes</p>
                        </div>
                    </div>
                    <div className="service-body">
                        <p>We provide large-scale cleaning solutions with minimal downtime. Our team is equipped to handle massive overhead tanks and provide certification for compliance.</p>
                        <ul className="feature-list">
                            <li>Confined space certified workers</li>
                            <li>Post-cleaning lab water testing reports</li>
                            <li>Annual Maintenance Contracts (AMC) available</li>
                            <li>Night service options to prevent operational disruption</li>
                        </ul>
                    </div>
                </div>

                <hr className="divider" />

                {/* Sump Section */}
                <div className="service-detail-section" id="sump">
                    <div className="service-header">
                        <div className="icon-box bg-blue-light">
                            <Warehouse size={32} color="var(--primary-blue)" />
                        </div>
                        <div>
                            <h2>Underground Sump Cleaning</h2>
                            <p>Deep cleaning for hidden contaminants</p>
                        </div>
                    </div>
                    <div className="service-body">
                        <p>Underground sumps are often the most neglected. They accumulate heavy sludge and are breeding grounds for cockroaches and other pests. Our powerful dewatering pumps and vacuum cleaners restore sumps to new.</p>
                    </div>
                </div>
            </div>

            <Footer />
            <WhatsAppButton />

            <style>{`
                .page-header {
                    background: #f0f7ff;
                    padding: 60px 0;
                    text-align: center;
                }
                .page-header h1 {
                    font-size: 36px;
                    margin-bottom: 16px;
                    color: var(--text-dark);
                }
                .page-content {
                    padding: 60px 24px;
                }
                .service-detail-section {
                    margin-bottom: 60px;
                }
                .service-header {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    margin-bottom: 32px;
                }
                .icon-box {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .bg-blue-light {
                    background: #e6f0ff;
                }
                .service-body p {
                    color: var(--text-gray);
                    line-height: 1.8;
                    margin-bottom: 24px;
                    font-size: 16px;
                }
                .service-body h3 {
                    margin-bottom: 24px;
                    font-size: 20px;
                }
                .process-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                    gap: 20px;
                }
                .process-card {
                    background: white;
                    border: 1px solid #eee;
                    padding: 20px;
                    border-radius: 12px;
                    text-align: center;
                    position: relative;
                }
                .step-num {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    font-size: 12px;
                    font-weight: 700;
                    color: #ddd;
                }
                .p-icon {
                    color: var(--primary-blue);
                    margin-bottom: 12px;
                    display: flex;
                    justify-content: center;
                }
                .process-card h4 {
                    font-size: 14px;
                    margin-bottom: 4px;
                }
                .process-card p {
                    font-size: 12px;
                    margin: 0;
                    line-height: 1.4;
                }
                .feature-list {
                    list-style: disc;
                    padding-left: 20px;
                    color: var(--text-gray);
                }
                .feature-list li {
                    margin-bottom: 12px;
                }
                .divider {
                    border: 0;
                    border-top: 1px solid #eee;
                    margin: 40px 0;
                }
                
                @media (max-width: 768px) {
                    .service-header {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
