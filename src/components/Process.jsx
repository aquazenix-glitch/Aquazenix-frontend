import React from 'react';
import { Droplet, Trash2, Zap, Wind, Sun, ShieldCheck } from 'lucide-react';

const Process = () => {
    const steps = [
        { icon: <Droplet />, title: 'Dewatering', desc: 'Pumping existing water' },
        { icon: <Trash2 />, title: 'Sludge Removal', desc: 'Suction of dirt & mud' },
        { icon: <Zap />, title: 'High Pressure', desc: 'Jet cleaning walls' },
        { icon: <Wind />, title: 'Vacuuming', desc: 'Removing remaining dirt' },
        { icon: <Sun />, title: 'UV Sterilization', desc: 'Killing bacteria' },
        { icon: <ShieldCheck />, title: 'Anti-bacterial Spray', desc: 'Final sanitization' },
    ];

    return (
        <section id="process" className="section process-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>The 6-Stage Cleaning Process</h2>
                    <p>Scientific, mechanized, and thorough.</p>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-icon-wrapper">
                                <div className="step-number">{index + 1}</div>
                                <div className="step-icon">{step.icon}</div>
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .process-section {
          background: white;
          text-align: center;
        }
        .mb-5 { margin-bottom: 3rem; }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .step-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          background: #f8fbff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px dashed #d0d7e5;
        }
        .step-icon {
          color: var(--primary-blue);
        }
        .step-number {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 24px;
          background: var(--primary-blue);
          color: white;
          border-radius: 50%;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .process-step h4 {
          font-size: 16px;
          margin-bottom: 8px;
        }
        .process-step p {
          font-size: 12px;
          color: var(--text-gray);
        }
      `}</style>
        </section>
    );
};

export default Process;
