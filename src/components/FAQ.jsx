import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'Why do I need to clean my water tank?',
            answer: 'Over time, sediments, bacteria, algae, and sludge build up at the bottom and sides of water tanks. Regular cleaning ensures safe, hygienic water for your family to use for bathing, cooking, and drinking, preventing waterborne diseases like legionella.'
        },
        {
            question: 'How often should I clean my water tank?',
            answer: 'It is recommended to clean your water tank at least once every 6 months to maintain hygiene standards.'
        },
        {
            question: 'Is the cleaning process safe for old tanks?',
            answer: 'Yes, our mechanized process is safe for all types of tanks including concrete, plastic (PVC), and steel tanks.'
        },
        {
            question: 'Do you use harsh chemicals?',
            answer: 'No, we use eco-friendly and food-grade cleaning agents that are safe for your health and the environment.'
        },
        {
            question: 'How long does the cleaning take?',
            answer: 'For a standard residential tank (up to 2000L), the process usually takes 60-90 minutes.'
        }
    ];

    return (
        <section id="faq" className="section faq-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => setOpenIndex(index === openIndex ? -1 : index)}>
                                <h3>{faq.question}</h3>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .faq-section {
          background-color: #f8fbff;
        }
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: white;
          margin-bottom: 16px;
          border-radius: 8px;
          border: 1px solid #eee;
          overflow: hidden;
        }
        .faq-item.active {
          border-color: var(--primary-blue);
        }
        .faq-question {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .faq-question h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .faq-answer {
          padding: 0 20px 20px;
          color: var(--text-gray);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default FAQ;
