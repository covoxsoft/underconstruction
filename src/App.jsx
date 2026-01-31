import React from 'react';
import './App.css';

function App() {
  return (
    <div className="clean-container">
      <div className="status-badge">
        <span className="status-dot"></span>
        <span>Work in Progress</span>
      </div>

      <h1>Coming Soon</h1>

      <div className="separator"></div>

      <p className="subtitle">
        We are crafting a new digital experience.<br />
        This domain is currently being updated.
      </p>

      <div className="footer-note">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
