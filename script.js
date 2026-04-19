// DOM elements
const envelope = document.getElementById('envelope');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelopeFlap = document.getElementById('envelopeFlap');
const letter = document.getElementById('letter');
const callToAction = document.getElementById('callToAction');

// State
let isEnvelopeOpen = false;


// Envelope interaction
function openEnvelope() {
    if (isEnvelopeOpen) return;
    
    isEnvelopeOpen = true;
    envelope.classList.add('opened');
    envelopeWrapper.classList.add('opened');
    callToAction.classList.add('hidden');
    
    // Play sound effect (optional)
    playEnvelopeSound();
}


function playEnvelopeSound() {
    // Create a simple sound effect using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}


// Event listeners
envelopeWrapper.addEventListener('click', (e) => {
    if (!isEnvelopeOpen) {
        openEnvelope();
    }
});


// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        if (!isEnvelopeOpen) {
            openEnvelope();
        }
    }
    
});

// Add hover effect to envelope
envelopeWrapper.addEventListener('mouseenter', () => {
    if (!isEnvelopeOpen) {
        envelope.style.transform = 'scale(1.05) rotateY(5deg)';
    }
});

envelopeWrapper.addEventListener('mouseleave', () => {
    if (!isEnvelopeOpen) {
        envelope.style.transform = 'scale(1) rotateY(0deg)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animation to envelope
    setTimeout(() => {
        envelope.style.animation = 'gentleFloat 3s ease-in-out infinite';
    }, 500);
});

// Add gentle floating animation to envelope
const style = document.createElement('style');
style.textContent = `
    @keyframes gentleFloat {
        0%, 100% { transform: translateY(0) rotateY(0deg); }
        50% { transform: translateY(-10px) rotateY(2deg); }
    }
    
    .envelope-wrapper:not(.opened) .envelope {
        animation: gentleFloat 3s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

envelopeWrapper.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

envelopeWrapper.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    if (!isEnvelopeOpen && touchEndY < touchStartY - 50) {
        openEnvelope();
    }
}

// Add resize handler for responsive behavior
window.addEventListener('resize', () => {
    // Adjust envelope size if needed
    const width = window.innerWidth;
    if (width < 480) {
        envelope.style.transform = 'scale(0.8)';
    } else if (width < 768) {
        envelope.style.transform = 'scale(0.9)';
    } else {
        envelope.style.transform = 'scale(1)';
    }
});

// Add accessibility features
envelopeWrapper.setAttribute('role', 'button');
envelopeWrapper.setAttribute('tabindex', '0');
envelopeWrapper.setAttribute('aria-label', 'Click to open envelope and read message');

musicToggle.setAttribute('aria-label', 'Toggle background music');

// Focus management
envelopeWrapper.addEventListener('focus', () => {
    envelopeWrapper.style.outline = '3px solid #ff6b9d';
    envelopeWrapper.style.outlineOffset = '5px';
});

envelopeWrapper.addEventListener('blur', () => {
    envelopeWrapper.style.outline = 'none';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
