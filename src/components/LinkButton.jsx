// LinkButton.jsx
import React from 'react';
import './LinkButton.css';

const LinkButton = ({ icon, link, name }) => {
  return (
    <a 
      href={link} 
      className="link-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="link-button-content">
        {icon && <span className="link-icon"><img src={icon} alt= {name}/></span>}
        <span className="link-name">{name}</span>
      </div>
    </a>
  );
};

export default LinkButton;