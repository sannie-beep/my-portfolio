// Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(true);
  let lastScrollY = window.pageYOffset;

  const controlNavbar = () => {
    if (window.pageYOffset > lastScrollY) {
      // If scrolling down, hide the navbar
      setShow(false);
    } else {
      // If scrolling up, show the navbar
      setShow(true);
    }
    lastScrollY = window.pageYOffset;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className={`navbar ${show ? 'active' : 'hidden'}`}>
      <ul className="nav-buttons">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#edu-exp">EDU</a></li>
        {/* <li><a href="#contact">CONTACT</a></li> */}
      </ul>
      <div className="nav-socials">
        <a href="https://github.com/sannie-beep" target="_blank" rel="noreferrer">
          <img src="./images/mdi_github.svg" alt="Link to my Github."/>
        </a>
        <a href="https://www.linkedin.com/in/sanchita-dhareshwar-58954125a/" target="_blank" rel="noreferrer">
          <img src="./images/mdi_linkedin.svg" alt="Link to my LinkedIn."/>
        </a>
        <a href="mailto:sanchita.dhareshwar@u.nus.edu">
          <img src="./images/ic_baseline-email.svg" alt="My Email Address."/>
        </a>
        <a className="nav-resume" href="/Sanchita_Dhareshwar_Resume.pdf" download="Sanchita_Dhareshwar_Resume">
          <img src="./images/Vector.svg" alt="Download my Resume."/>
        </a>
      </div>
    </div>
  );
}
