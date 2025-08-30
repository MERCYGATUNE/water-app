import React, { useState } from 'react';
import './AIRecommendations.css';

const AIRecommendations = ({ user, onReservoirSelect }) => {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    waterQuality: '',
    capacity: ''
  });

  const fetchAIRecommendations = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to get AI recommendations');
        return;
      }

      const queryParams = new URLSearchParams();
      if (filters.location) queryParams.append('location', filters.location);
      if (filters.waterQuality) queryParams.append('waterQuality', filters.waterQuality);
      if (filters.capacity) queryParams.append('capacity', filters.capacity);

      const response = await fetch(`http://localhost:8080/api/reservoirs/recommendations?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch AI recommendations');
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGetRecommendations = () => {
    fetchAIRecommendations();
  };

  const handleReservoirClick = (reservoir) => {
    if (onReservoirSelect) {
      onReservoirSelect(reservoir);
    }
  };

  const getWaterQualityColor = (quality) => {
    switch (quality) {
      case 'excellent': return '#28a745';
      case 'good': return '#17a2b8';
      case 'fair': return '#ffc107';
      case 'poor': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getCapacityColor = (percentage) => {
    if (percentage >= 70) return '#28a745';
    if (percentage >= 40) return '#ffc107';
    if (percentage >= 20) return '#fd7e14';
    return '#dc3545';
  };

  return (
    <div className="ai-recommendations">
      <div className="ai-header">
        <h2>🤖 AI-Powered Recommendations</h2>
        <p>Get intelligent insights and personalized reservoir suggestions</p>
      </div>

      {/* AI Filters */}
      <div className="ai-filters">
        <div className="filter-group">
          <label>Location:</label>
          <input
            type="text"
            placeholder="e.g., Kiambu, Nairobi"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          />
        </div>
        
        <div className="filter-group">
          <label>Water Quality:</label>
          <select
            value={filters.waterQuality}
            onChange={(e) => handleFilterChange('waterQuality', e.target.value)}
          >
            <option value="">Any Quality</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Capacity:</label>
          <select
            value={filters.capacity}
            onChange={(e) => handleFilterChange('capacity', e.target.value)}
          >
            <option value="">Any Capacity</option>
            <option value="high">High (≥70%)</option>
            <option value="medium">Medium (30-70%)</option>
            <option value="low">Low (&lt;30%)</option>
          </select>
        </div>
        
        <button 
          className="ai-button"
          onClick={handleGetRecommendations}
          disabled={loading}
        >
          {loading ? '🤖 AI Analyzing...' : '🚀 Get AI Recommendations'}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="ai-error">
          <p>❌ {error}</p>
        </div>
      )}

      {/* AI Recommendations Display */}
      {recommendations && (
        <div className="ai-results">
          <div className="ai-insights">
            <h3>🧠 AI Insights</h3>
            <div className="insight-content">
              {recommendations.aiInsights ? (
                <div className="ai-message">
                  <p>{recommendations.aiInsights}</p>
                </div>
              ) : (
                <div className="basic-recommendations">
                  <p>📊 {recommendations.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="recommended-reservoirs">
            <h3>💡 Recommended Reservoirs</h3>
            <div className="reservoir-grid">
              {recommendations.reservoirs.map((reservoir) => (
                <div 
                  key={reservoir.id} 
                  className="reservoir-card"
                  onClick={() => handleReservoirClick(reservoir)}
                >
                  <div className="reservoir-header">
                    <h4>{reservoir.name}</h4>
                    <span 
                      className="quality-badge"
                      style={{ backgroundColor: getWaterQualityColor(reservoir.waterQuality) }}
                    >
                      {reservoir.waterQuality}
                    </span>
                  </div>
                  
                  <div className="reservoir-details">
                    <p><strong>Location:</strong> {reservoir.county}, {reservoir.subCounty}</p>
                    <p><strong>Capacity:</strong> 
                      <span 
                        className="capacity-indicator"
                        style={{ color: getCapacityColor(reservoir.currentCapacityPercentage) }}
                      >
                        {reservoir.currentCapacityPercentage}%
                      </span>
                    </p>
                    <p><strong>Status:</strong> {reservoir.status}</p>
                    <p><strong>Runout:</strong> {new Date(reservoir.estimatedRunoutDate).toLocaleDateString()}</p>
                  </div>
                  
                  <div className="reservoir-actions">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* No Recommendations */}
      {recommendations && recommendations.reservoirs.length === 0 && (
        <div className="no-recommendations">
          <p>🔍 No reservoirs match your current criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;
