import React from 'react';

const LandingPage = ({ onEnterSpace }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Space Explorer</h1>
        <p>
          Discover the wonders of the universe and explore celestial objects from our solar
          system and beyond.
        </p>
        <button className="enter-button" onClick={onEnterSpace}>
          <span className="rocket-icon">🚀</span> Enter The Space <span className="arrow">›</span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
