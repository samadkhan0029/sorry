import React, { useState, useEffect } from 'react';
import './App.css';
import Envelope from './components/Envelope';
import Letter from './components/Letter';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const openEnvelope = () => {
    if (isEnvelopeOpen) return;
    
    setIsEnvelopeOpen(true);
  };

  // Add keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !isEnvelopeOpen) {
        e.preventDefault();
        openEnvelope();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isEnvelopeOpen]);

  return (
    <div className="App">
      <div className="container">
        {/* Title */}
        <h1 className="title">I'm sorry</h1>
        
        {/* Subtitle */}
        <p className="subtitle">a little something I wanted you to read...</p>
        
        {/* Envelope with Letter inside */}
        <div style={{ position: 'relative' }}>
          <Envelope isOpen={isEnvelopeOpen} onOpen={openEnvelope} />
          <Letter isVisible={isEnvelopeOpen} />
        </div>
        
        {/* Call to action */}
        <div className={`call-to-action ${isEnvelopeOpen ? 'hidden' : ''}`}>
          <p>click to open <span className="heart-icon-small">❤️</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
