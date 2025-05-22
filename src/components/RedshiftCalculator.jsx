// src/components/RedshiftCalculator.js
import React, { useState } from "react";

const RedshiftCalculator = () => {
  const [spectralIntensity, setSpectralIntensity] = useState(0);
  const [galaxyBrightness, setGalaxyBrightness] = useState(0);
  const [distance, setDistance] = useState(0);
  const [redshift, setRedshift] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateRedshift = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Prepare data for the ML model
      const inputData = {
        ra: 0, // Default values since we don't have these inputs
        dec: 0,
        u_mag: parseFloat(spectralIntensity),
        g_mag: parseFloat(galaxyBrightness),
        r_mag: parseFloat(distance),
        i_mag: 0, // Default values
        z_mag: 0,
      };

      // Send request to backend ML servic`e
      const orderedKeys = ["ra", "dec", "u_mag", "g_mag", "r_mag"];
      console.log(inputData);
      const output = {
        values: orderedKeys.map((key) => inputData[key]),
      };
      console.log(output);
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(output),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setRedshift(result.prediction); // Updated to match backend response structure
    } catch (err) {
      setError("Failed to calculate redshift. Please try again.");
      console.error("Error calculating redshift:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="redshift-calculator">
      <h2>Predict Redshift</h2>
      <p>Enter galaxy properties to predict redshift using our ML model:</p>

      <div className="form-group">
        <label>Spectral Line Intensity</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="10"
            step="0.01"
            value={spectralIntensity}
            onChange={(e) => setSpectralIntensity(e.target.value)}
          />
          <div className="slider-value">{spectralIntensity}</div>
        </div>
      </div>

      <div className="form-group">
        <label>Galaxy Brightness</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="10"
            step="0.01"
            value={galaxyBrightness}
            onChange={(e) => setGalaxyBrightness(e.target.value)}
          />
          <div className="slider-value">{galaxyBrightness}</div>
        </div>
      </div>

      <div className="form-group">
        <label>Distance from Earth (Mpc)</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="10"
            step="0.01"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <div className="slider-value">{distance}</div>
        </div>
      </div>

      <button
        onClick={calculateRedshift}
        className="calculate-button"
        disabled={isLoading}
      >
        {isLoading ? "Calculating..." : "Calculate Redshift"}
      </button>

      {error && <div className="error-message">{error}</div>}

      {redshift !== null && !error && (
        <div className="result">
          <h3>Predicted Redshift:</h3>
          <div className="redshift-value">{redshift}</div>
          <p>
            This indicates the galaxy is{" "}
            {redshift > 1.5 ? "very distant" : "relatively nearby"}.
            {redshift > 5 &&
              " This is a high-redshift galaxy from the early universe!"}
          </p>
          <div className="interpretation">
            <h4>What does this mean?</h4>
            <p>
              Redshift is a measure of how much a galaxy's light has been
              stretched by the expansion of the universe. Higher redshift values
              indicate greater distances and objects that we're seeing as they
              were further back in time.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedshiftCalculator;
