import React, { useState, useRef, useEffect } from 'react';

const GlowingButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      ref={buttonRef}
      className="connect-button"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        '--glow-opacity': isHovering ? 0.7 : 0
      }}
    >
      LET'S CONNECT
      <style jsx>{`
        .connect-button {
          display: block;
          margin-left: 0;
          position: relative;
          padding: 16px 32px;
          border-radius: 30px;
          font-family: Pixelify Sans;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #B78B83;
          background-color: #240845 ;
          border: 2px solid #3a2d57;
          cursor: pointer;
          overflow: hidden;
          isolation: isolate;
        }

        .connect-button::before {
          content: '';
          position: absolute;
          width: 150px;
          height: 150px;
          top: calc(var(--mouse-y) - 75px);
          left: calc(var(--mouse-x) - 75px);
          background: radial-gradient(circle, rgba(106,187,191,0.27727587617078087) 0%, rgba(113,60,125,0.4229341394761029) 22%, rgba(36,8,69,0.5938024868150384) 56%);
          border-radius: 50%;
          opacity: var(--glow-opacity);
          transition: opacity 0.2s;
          z-index: -1;
          pointer-events: none;
          
        }
      `}</style>
    </button>
  );
};

export default GlowingButton;