import React from 'react';
import './Education.css';

const Education = ({ educationData }) => {
  return (
    <section className = "education-container">
        <div className = "education-heading">
            <h1>EDUCATION</h1>
        </div>
        <div className="education-timeline">
        {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
            <div className="timeline-marker">
            { index === 0 ? (
                    <div className="timeline-first-dot"></div>
                    ) : (
                    <div className="timeline-dot"></div>
                    )}
                {index !== educationData.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
                <h3 className="timeline-date">{item.date}</h3>
                <h2 className="timeline-title">{item.title}</h2>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-subtext">{item.subtext}</p>
                <div className="timeline-divider"></div>
                <ul className="timeline-details">
                {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </div>
    </section>
  );
};

export default Education;