import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGoToDemo = () => {
    navigate('/login');
  };

  const handleLearnMore = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">AI-Powered</span> Water Management
            </h1>
            <p className="hero-subtitle">
              Revolutionizing water resource management in Kenya with intelligent monitoring, 
              real-time insights, and AI-powered recommendations for sustainable water distribution.
            </p>
            <div className="hero-buttons">
              <button className="cta-primary" onClick={handleGoToDemo}>
                🚀 Go to Demo
              </button>
              <button className="cta-secondary" onClick={handleLearnMore}>
                📖 Learn More
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="water-drop">💧</div>
              <div className="ai-brain">🧠</div>
              <div className="data-flow">📊</div>
              <div className="reservoir">🏞️</div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">12+</span>
            <span className="stat-label">Kenyan Counties</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Real-time Monitoring</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">AI</span>
            <span className="stat-label">Powered Insights</span>
          </div>
        </div>
      </section>

      {/* AI Implementation Showcase */}
      <section id="features" className="ai-showcase">
        <div className="container">
          <div className="section-header">
            <h2>🤖 How We've Implemented AI</h2>
            <p>Discover the cutting-edge artificial intelligence powering our water management system</p>
          </div>
          
          <div className="ai-features-grid">
            <div className="ai-feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Inflection AI Integration</h3>
              <p>Advanced AI platform providing intelligent reservoir recommendations and water quality insights</p>
              <div className="feature-details">
                <span className="tag">Real-time Analysis</span>
                <span className="tag">Smart Predictions</span>
              </div>
            </div>

            <div className="ai-feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Recommendations</h3>
              <p>AI generates tailored suggestions based on location, water quality, and capacity requirements</p>
              <div className="feature-details">
                <span className="tag">User Preferences</span>
                <span className="tag">Location-based</span>
              </div>
            </div>

            <div className="ai-feature-card">
              <div className="feature-icon">⚠️</div>
              <h3>Intelligent Alerts</h3>
              <p>AI-powered early warning system for critical water situations and capacity management</p>
              <div className="feature-details">
                <span className="tag">Predictive Alerts</span>
                <span className="tag">Risk Assessment</span>
              </div>
            </div>

            <div className="ai-feature-card">
              <div className="feature-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Advanced pattern recognition and trend analysis for optimal water resource planning</p>
              <div className="feature-details">
                <span className="tag">Pattern Recognition</span>
                <span className="tag">Trend Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <div className="container">
          <div className="section-header">
            <h2>✨ Key Features</h2>
            <p>Everything you need for comprehensive water reservoir management</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💧</div>
              <h3>Real-time Monitoring</h3>
              <p>Live updates on water levels, quality, and capacity across all reservoirs</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Advanced filtering by location, water quality, and capacity requirements</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Mobile Responsive</h3>
              <p>Access your water data anywhere, anytime on any device</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🔐</div>
              <h3>Secure Access</h3>
              <p>JWT-based authentication with role-based access control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-header">
            <h2>🛠️ Technology Stack</h2>
            <p>Built with modern, scalable technologies</p>
          </div>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-items">
                <span className="tech-item">React 18</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">Responsive Design</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-items">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">MongoDB</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>AI & Security</h3>
              <div className="tech-items">
                <span className="tech-item">Inflection AI</span>
                <span className="tech-item">JWT</span>
                <span className="tech-item">bcryptjs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Experience AI-Powered Water Management?</h2>
          <p>Join us in revolutionizing how Kenya manages its water resources</p>
          <button className="cta-primary large" onClick={handleGoToDemo}>
            🚀 Start Your Demo Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Water Reservoir Management System</h4>
              <p>Empowering Kenya with intelligent water resource management</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={handleGoToDemo}>Demo</button></li>
                <li><button onClick={handleLearnMore}>Features</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Built with ❤️ for Kenya</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Water Reservoir Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
