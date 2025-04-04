// LanguageCard.jsx
import React from 'react';
import styles from './SkillsCard.module.css';

const LanguageCard = ({ 
  icon, 
  name, 
  description, 
  backgroundColor = '#f0f0f0', 
  nameColor = '#333',
  descriptionColor = '#666' 
}) => {
  return (
    <div 
      className={styles.card} 
      style={{ backgroundColor }}
    >
      <div className={styles.content}>
        <div className={styles.icon}>
          <img src={icon} alt={`${name} icon`} />
        </div>
        <div className={styles.details}>
          <h3 style={{ color: nameColor }}>{name}</h3>
          <p style={{ color: descriptionColor }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;