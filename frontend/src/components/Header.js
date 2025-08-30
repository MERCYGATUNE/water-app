import React from 'react';
import './Header.css';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">💧</span>
          <h1 className="logo-text">Water Oasis</h1>
        </div>
        <div className="user-info">
          <span className="welcome-text">Welcome, {user?.fullName || 'User'}!</span>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
