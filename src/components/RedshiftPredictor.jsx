import React, { useState } from 'react';
import axios from 'axios';
import './RedshiftPredictor.css';

const RedshiftPredictor = () => {
  const [formData, setFormData] = useState({
    ra: '',
    dec: '',
    u_mag: '',
    g_mag: '',
    r_mag: '',
    i_mag: '',
    z_mag: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred while making the prediction');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      ra: '',
      dec: '',
      u_mag: '',
      g_mag: '',
      r_mag: '',
      i_mag: '',
      z_mag: ''
    });
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="redshift-predictor">
      <div className="predictor-header">
        <h2>Redshift Predictor</h2>
        <button 
          className="help-button"
          onClick={() => setShowHelp(!showHelp)}
        >
          {showHelp ? 'Hide Help' : 'Show Help'}
        </button>
      </div>

      {showHelp && (
        <div className="help-section">
          <h3>How to Use the Redshift Predictor</h3>
          <p>
            Enter the astronomical coordinates (Right Ascension and Declination) and 
            the magnitude values for each band (U, G, R, I, Z) to predict the redshift 
            of a celestial object.
          </p>
          <h4>About Magnitudes:</h4>
          <ul>
            <li>U-band: Ultraviolet magnitude</li>
            <li>G-band: Green magnitude</li>
            <li>R-band: Red magnitude</li>
            <li>I-band: Infrared magnitude</li>
            <li>Z-band: Near-infrared magnitude</li>
          </ul>
          <p>
            Magnitudes are logarithmic measures of brightness. Lower values indicate 
            brighter objects. Typical values range from 0 to 30.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="prediction-form">
        <div className="form-group">
          <label htmlFor="ra">Right Ascension (RA)</label>
          <input
            type="number"
            id="ra"
            name="ra"
            value={formData.ra}
            onChange={handleInputChange}
            step="0.0001"
            required
            placeholder="Enter RA in degrees"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dec">Declination (DEC)</label>
          <input
            type="number"
            id="dec"
            name="dec"
            value={formData.dec}
            onChange={handleInputChange}
            step="0.0001"
            required
            placeholder="Enter DEC in degrees"
          />
        </div>

        <div className="magnitude-inputs">
          <div className="form-group">
            <label htmlFor="u_mag">U-band Magnitude</label>
            <input
              type="number"
              id="u_mag"
              name="u_mag"
              value={formData.u_mag}
              onChange={handleInputChange}
              step="0.01"
              required
              placeholder="Enter U magnitude"
            />
          </div>

          <div className="form-group">
            <label htmlFor="g_mag">G-band Magnitude</label>
            <input
              type="number"
              id="g_mag"
              name="g_mag"
              value={formData.g_mag}
              onChange={handleInputChange}
              step="0.01"
              required
              placeholder="Enter G magnitude"
            />
          </div>

          <div className="form-group">
            <label htmlFor="r_mag">R-band Magnitude</label>
            <input
              type="number"
              id="r_mag"
              name="r_mag"
              value={formData.r_mag}
              onChange={handleInputChange}
              step="0.01"
              required
              placeholder="Enter R magnitude"
            />
          </div>

          <div className="form-group">
            <label htmlFor="i_mag">I-band Magnitude</label>
            <input
              type="number"
              id="i_mag"
              name="i_mag"
              value={formData.i_mag}
              onChange={handleInputChange}
              step="0.01"
              required
              placeholder="Enter I magnitude"
            />
          </div>

          <div className="form-group">
            <label htmlFor="z_mag">Z-band Magnitude</label>
            <input
              type="number"
              id="z_mag"
              name="z_mag"
              value={formData.z_mag}
              onChange={handleInputChange}
              step="0.01"
              required
              placeholder="Enter Z magnitude"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="predict-button" disabled={loading}>
            {loading ? 'Predicting...' : 'Predict Redshift'}
          </button>
          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {prediction && (
        <div className="prediction-result">
          <h3>Prediction Result</h3>
          <div className="result-details">
            <p><strong>Predicted Redshift:</strong> {prediction.redshift.toFixed(4)}</p>
            <p><strong>Confidence:</strong> {prediction.confidence.toFixed(2)}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedshiftPredictor; 