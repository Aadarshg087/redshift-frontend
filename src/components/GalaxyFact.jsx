import React, { useState } from 'react';

const GalaxyFact = () => {
  const [factIndex, setFactIndex] = useState(0);
  
  const galaxyFacts = [
    "The Milky Way is estimated to contain 100-400 billion stars.",
    "The nearest major galaxy to the Milky Way is the Andromeda Galaxy, which is approximately 2.5 million light-years away.",
    "Galaxies come in different shapes: spiral, elliptical, and irregular.",
    "Our solar system is located about 27,000 light-years from the Galactic Center.",
    "The Milky Way is traveling through space at approximately 552 kilometers per second.",
    "In about 4.5 billion years, the Milky Way will collide with the Andromeda Galaxy."
  ];
  
  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % galaxyFacts.length);
  };
  
  return (
    <div className="galaxy-fact">
      <h2>NASA's Galaxy Guide</h2>
      <div className="fact-card">
        <div className="fact-content">
          <p>{galaxyFacts[factIndex]}</p>
        </div>
        <button className="discover-button" onClick={nextFact}>
          Discover a Galaxy Fact!
        </button>
      </div>
    </div>
  );
};

export default GalaxyFact;