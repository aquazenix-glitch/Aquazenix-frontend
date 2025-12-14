import React from 'react';

const Stats = () => {
    const stats = [
        { label: 'Tanks Cleaned', value: '500+', color: '#0066FF' },
        { label: 'Satisfaction Rate', value: '99%', color: '#0066FF' },
        { label: 'Years Experience', value: '5+', color: '#0066FF' },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <span className="stat-label">{stat.label}</span>
                            <h3 className="stat-value">{stat.value}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .stats-section {
          padding: 40px 0;
          background-color: var(--bg-off-white);
          margin-top: -60px;
          position: relative;
          z-index: 10;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }
        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          text-align: left;
          border: 1px solid #eee;
        }
        .stat-label {
          display: block;
          color: var(--text-gray);
          font-size: 14px;
          margin-bottom: 8px;
        }
        .stat-value {
          font-size: 32px;
          color: var(--primary-blue);
          margin: 0;
        }
      `}</style>
        </section>
    );
};

export default Stats;
