import React from "react";
//import './Experience.css';

// export default function Experience() {
//     return(
//         <section className="experience">
//             <h1 className="mainTitle">EXPERIENCE</h1>
//             <p>This section is under construction. Please check back later!</p>
//         </section>
//     )
// }
import './Experience.css';




const Experience = ({ experienceData }) => {
    return (
        <section className="experience-container">
            <div className="experience-heading">
                <h1>EXPERIENCE</h1>
            </div>
            <div className="timeline-exp">
                {experienceData.map((item, index) => (
                    <div key={index} className="timeline-exp-item">
                        <div className="timeline-exp-content">
                            <h3 className="timeline-exp-date">{item.date}</h3>
                            <h2 className="timeline-exp-title">{item.title}</h2>
                            <h3 className="timeline-exp-degree">{item.degree}</h3>
                            <p className="timeline-exp-subtext">{item.subtext}</p>
                            <div className="timeline-exp-divider"></div>
                            <ul className="timeline-exp-details">
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

export default Experience;