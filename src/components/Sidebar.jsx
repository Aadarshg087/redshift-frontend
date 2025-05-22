import React from 'react';

const Sidebar = ({ onNavigate, active }) => {
  return (
    <div className="sidebar">
      <div className="nav-section">
        <h3>Explore More</h3>
        <nav>
          <ul>
            <li 
              className={active === 'redshift' ? 'active' : ''}
              onClick={() => onNavigate('redshift')}
            >
              <a href="#">Predict Redshift</a>
            </li>
            <li 
              className={active === 'galaxy-fact' ? 'active' : ''}
              onClick={() => onNavigate('galaxy-fact')}
            >
              <a href="#">NASA's Galaxy Guide</a>
            </li>
            <li 
              className={active === 'space-fortune' ? 'active' : ''}
              onClick={() => onNavigate('space-fortune')}
            >
              <a href="#">Space Fortune Teller</a>
            </li>
            <li 
              className={active === 'cosmic-trivia' ? 'active' : ''}
              onClick={() => onNavigate('cosmic-trivia')}
            >
              <a href="#">Cosmic Trivia Quiz</a>
            </li>
            <li 
              className={active === 'data-models' ? 'active' : ''}
              onClick={() => onNavigate('data-models')}
            >
              Solar System
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;