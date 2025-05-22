import React from 'react';
import './DataModels.css';

const DataModels = () => {
  const celestialObjects = [
    { name: "Sun", type: "Star", distance: "0 AU", description: "The star at the center of our Solar System" },
    { name: "Mercury", type: "Planet", distance: "0.4 AU", description: "The smallest and innermost planet in the Solar System" },
    { name: "Venus", type: "Planet", distance: "0.7 AU", description: "Second planet from the Sun" },
    { name: "Earth", type: "Planet", distance: "1.0 AU", description: "Our home planet" },
    { name: "Mars", type: "Planet", distance: "1.5 AU", description: "Fourth planet from the Sun" },
    { name: "Jupiter", type: "Gas Giant", distance: "5.2 AU", description: "Largest planet in our Solar System" },
  ];

  return (
    <div className="data-models">
      <h2>Celestial Data Models</h2>
      <p>Explore detailed information about objects in our solar system and beyond.</p>
      
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Distance</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {celestialObjects.map((object, index) => (
              <tr key={index}>
                <td>{object.name}</td>
                <td>{object.type}</td>
                <td>{object.distance}</td>
                <td>{object.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="model-visualization">
        <h3>Solar System Visualization</h3>
        <div className="solar-system">
          <div className="sun"></div>
          <div className="orbit mercury-orbit"><div className="planet mercury"></div></div>
          <div className="orbit venus-orbit"><div className="planet venus"></div></div>
          <div className="orbit earth-orbit"><div className="planet earth"></div></div>
          <div className="orbit mars-orbit"><div className="planet mars"></div></div>
          <div className="orbit jupiter-orbit"><div className="planet jupiter"></div></div>
        </div>
      </div>
    </div>
  );
};

export default DataModels;