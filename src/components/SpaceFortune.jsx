import React, { useState } from 'react';

const SpaceFortune = () => {
  const [name, setName] = useState('');
  const [fortune, setFortune] = useState('');
  
  const fortunes = [
    "You will discover a new constellation next week.",
    "A journey to distant lands awaits you in the coming months.",
    "The stars align in your favor - expect good news on the horizon.",
    "Your curiosity about the cosmos will lead to an amazing discovery.",
    "A mysterious stranger from a distant galaxy will enter your life.",
    "Your future is as bright and vast as the universe itself."
  ];
  
  const generateFortune = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(`🌟 ${name}, ${fortunes[randomIndex]}`);
  };
  
  return (
    <div className="space-fortune">
      <h2>🔮 AI Space Fortune Teller</h2>
      <form onSubmit={generateFortune}>
        <div className="form-group">
          <label>Enter your name to receive a cosmic fortune:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Your name here" 
          />
        </div>
        <button type="submit" className="generate-button">Generate Fortune</button>
      </form>
      
      {fortune && (
        <div className="fortune-result">
          <p>{fortune}</p>
        </div>
      )}
    </div>
  );
};

export default SpaceFortune;
