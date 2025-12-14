import React from 'react';

const Comparison = () => {
    return (
        <section className="section comparison-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Why Choose Mechanized Cleaning?</h2>
                    <p>See the difference for yourself.</p>
                </div>

                <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th className="text-red">Traditional Cleaning</th>
                                <th className="text-blue bg-blue-light">Aquazenix Cleaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hygiene Level</td>
                                <td className="text-gray">Only removes visible dirt (40-50%)</td>
                                <td className="text-blue bg-blue-light">Removes bacteria & viruses (99.9%)</td>
                            </tr>
                            <tr>
                                <td>Process</td>
                                <td className="text-gray">Manual scrubbing with broom/brush</td>
                                <td className="text-blue bg-blue-light">High-pressure jet & vacuum</td>
                            </tr>
                            <tr>
                                <td>Water Wastage</td>
                                <td className="text-gray">High water wastage</td>
                                <td className="text-blue bg-blue-light">Minimal water wastage</td>
                            </tr>
                            <tr>
                                <td>Worker Safety</td>
                                <td className="text-gray">Unsafe entry into tank</td>
                                <td className="text-blue bg-blue-light">Professional equipment & gear</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <style>{`
        .comparison-section {
          background: #f8fbff;
        }
        .comparison-table-wrapper {
          overflow-x: auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          padding: 24px;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }
        .comparison-table th, .comparison-table td {
          padding: 20px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        .comparison-table th {
          font-weight: 700;
          color: var(--text-dark);
          text-transform: uppercase;
          font-size: 12px;
          border-bottom: 2px solid #eee;
        }
        .comparison-table td {
          font-size: 15px;
          font-weight: 500;
        }
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        .text-red { color: #E11D48; }
        .text-blue { color: var(--primary-blue); font-weight: 600; }
        .text-gray { color: var(--text-gray); }
        .bg-blue-light { background-color: #f0f7ff; }
        .comparison-table th.bg-blue-light { border-radius: 12px 12px 0 0; }
        .comparison-table td.bg-blue-light { }
        
        /* Apply rounded corners to the active column */
        .comparison-table tr td:last-child, .comparison-table tr th:last-child {
           /* Logic for highlighting the column is partly in HTML classes */
        }
      `}</style>
        </section>
    );
};

export default Comparison;
