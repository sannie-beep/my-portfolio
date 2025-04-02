import React, { useState } from 'react';

export default function SkillCard ({ icon, name, description }){
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="skill-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-icon">
        {icon}
      </div>
      
      <div className={`skill-details ${isHovered ? 'visible' : ''}`}>
        <h3 className="skill-name">{name}</h3>
        <p className="skill-description">{description}</p>
      </div>
      
      <style jsx>{`
        .skill-card {
          position: relative;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          width: 80px;
          height: 80px;
          transition: all 0.3s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        
        .skill-card:hover {
          width: 220px;
          height: 120px;
        }
        
        .skill-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          color: #333;
          padding: 24px 0;
          transition: all 0.3s ease;
        }
        
        .skill-card:hover .skill-icon {
          font-size: 24px;
          padding: 16px 0 8px;
          align-items: flex-start;
        }
        
        .skill-details {
          opacity: 0;
          padding: 0 16px;
          transform: translateY(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .skill-details.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skill-name {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
        
        .skill-description {
          margin: 0;
          font-size: 12px;
          color: #666;
        }
      `}</style>
    </div>
  );
};