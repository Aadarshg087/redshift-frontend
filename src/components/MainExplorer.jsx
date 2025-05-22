import React, { useState } from 'react';
import Sidebar from './Sidebar';
import GalaxyFact from './GalaxyFact';
import SpaceFortune from './SpaceFortune';
import CosmicTrivia from './CosmicTrivia';
import RedshiftCalculator from './RedshiftCalculator';
import DataModels from './DataModels';
import RedshiftPredictor from './RedshiftPredictor';
import './MainExplorer.css';

const MainExplorer = () => {
  const [activeSection, setActiveSection] = useState('redshift');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const getSectionHeader = () => {
    switch (activeSection) {
      case 'redshift':
        return {
          title: 'Predict Redshift',
          description: 'Calculate and predict the redshift of celestial objects using our advanced calculator.'
        };
      case 'galaxy-fact':
        return {
          title: "NASA's Galaxy Guide",
          description: 'Explore fascinating facts about galaxies from NASA\'s extensive database.'
        };
      case 'space-fortune':
        return {
          title: 'Space Fortune Teller',
          description: 'Discover what the cosmos has in store for you with our cosmic fortune teller.'
        };
      case 'cosmic-trivia':
        return {
          title: 'Cosmic Trivia Quiz',
          description: 'Test your knowledge of the universe with our interactive space quiz.'
        };
      case 'data-models':
        return {
          title: 'Solar System Explorer',
          description: 'Explore detailed information about our solar system and its celestial bodies.'
        };
      default:
        return {
          title: 'Galactic Explorer',
          description: 'Discover the wonders of the universe and explore the vastness of space!'
        };
    }
  };

  const { title, description } = getSectionHeader();

  return (
    <div className="main-explorer">
      <div className="header">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">🚀</span> Galactic Explorer <span className="logo-img">🌌</span>
          </div>
        </div>
      </div>
      
      <div className="content-wrapper">
        <Sidebar 
          onNavigate={handleNavigation} 
          active={activeSection}
        />
        
        <main className="main-content">
          <div className="section-header">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          
          {activeSection === 'data-models' && <DataModels />}
          {activeSection === 'galaxy-fact' && <GalaxyFact />}
          {activeSection === 'space-fortune' && <SpaceFortune />}
          {activeSection === 'cosmic-trivia' && <CosmicTrivia />}
          {activeSection === 'redshift' && <RedshiftCalculator />}
          {activeSection === 'redshift-predictor' && <RedshiftPredictor />}
        </main>
      </div>
    </div>
  );
};

export default MainExplorer;
