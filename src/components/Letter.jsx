import React from 'react';
import './Letter.css';

const Letter = ({ isVisible }) => {
  return (
    <div className={`letter ${isVisible ? 'visible' : ''}`}>
      <div className="letter-content">
        <div className="letter-header">
          <p className="letter-date">April 19, 2026</p>
          <p className="letter-salutation">Hey Erum,</p>
        </div>
        <div className="letter-body">
          <p className="letter-line" style={{'--delay': '0.2s'}}>Okay first of all… I'm really really sorry 😭</p>
          <p className="letter-line" style={{'--delay': '0.4s'}}>I know you are still angry with me maybe, and honestly I get why.</p>
          <p className="letter-line" style={{'--delay': '0.6s'}}>I should've just told you that I was going out for a movie instead of disappearing like that.</p>
          <p className="letter-line" style={{'--delay': '0.8s'}}>It wasn't intentional at all, meri galti hai ye.</p>
          <p className="letter-line" style={{'--delay': '1.0s'}}>Phone bhi theatre mein switch off ho gaya, and those 4 hours just went by like that…</p>
          <p className="letter-line" style={{'--delay': '1.2s'}}>but I swear I wasn't ignoring you or anything like that.</p>
          <p className="letter-line" style={{'--delay': '1.4s'}}>Agar possible hota toh pakka reply karta.</p>
          <p className="letter-line" style={{'--delay': '1.6s'}}>I know it must've felt like I just vanished, and I hate that I made you feel that way.</p>
          <p className="letter-line" style={{'--delay': '1.8s'}}>You don't deserve that, especially from me.</p>
          <p className="letter-line" style={{'--delay': '2.0s'}}>Next time pakka I'll inform you, even if it's something small.</p>
          <p className="letter-line" style={{'--delay': '2.2s'}}>Bas maaf kar doh mujhe please 🥺</p>
          <p className="letter-line" style={{'--delay': '2.4s'}}>I'm really sorry, okay?</p>
        </div>
        <div className="letter-footer">
          <p className="letter-signature">— Samad</p>
          <p className="letter-name">🤍</p>
        </div>
      </div>
    </div>
  );
};

export default Letter;
