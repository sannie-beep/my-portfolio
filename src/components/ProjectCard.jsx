import React from 'react';
import './ProjectCard.css';
import LinkButton from './LinkButton';

const ProjectCard = ({ 
  title, 
  image, 
  description, 
  skills, 
  links 
}) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className= "project-card-shine"></div>
        <h2 className="project-card-title">{title}</h2>
        <div className= "project-card-shine"></div>
      </div>
      
      <div className="project-card-content">
        <div className="project-card-image-container">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="project-card-image" 
          />
        </div>
        
        <div className="project-card-info">
          <div className="project-card-description">
            {description.map((item, index) => (
              <div key={index} className="description-item">
                <span className="bullet">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          
          <div className="project-card-skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
          
          <div className="project-card-links">
            {links.map((link, index) => (
              <LinkButton 
                key={index}
                icon={link.icon} 
                link={link.url} 
                name={link.name} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
