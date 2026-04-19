import React, { useRef } from 'react';
import './Envelope.css';

const Envelope = ({ isOpen, onOpen }) => {
  const envelopeRef = useRef(null);

  const handleClick = () => {
    if (!isOpen) {
      onOpen();
    }
  };

  // Add initial animation to envelope
  React.useEffect(() => {
    setTimeout(() => {
      if (envelopeRef.current) {
        envelopeRef.current.style.animation = 'gentleFloat 3s ease-in-out infinite';
      }
    }, 500);
  }, []);

  return (
    <div 
      className={`envelope-wrapper ${isOpen ? 'opened' : ''}`}
      onClick={handleClick}
      ref={envelopeRef}
    >
      <div className={`envelope ${isOpen ? 'opened' : ''}`}>
        <div className="envelope-front">
          <div className="envelope-flap"></div>
          <div className="envelope-heart-button">
            <div className="heart-icon">❤️</div>
          </div>
        </div>
        <div className="envelope-back"></div>
      </div>
    </div>
  );
};

export default Envelope;
