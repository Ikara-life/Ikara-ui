import React from "react";
import "./FrontPage.css";

function FrontPage() {
  return (
    <div className="hero-container">
      {/* Header */}
      <div className="header">
        <div className="brand">
          <div className="logo">Ikara.club</div>
          <div className="subdomain">ikara.co</div>
        </div>
        <div className="nav-buttons">
          <button className="btn-signin">Sign In</button>
          <button className="btn-get-started">Get Started</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="custom-heading">
          Build a 21-day habit streak—<br />
          <span className="highlight">starting now.</span>
        </h1>

        <p className="join-text">Join 1,281 members already on Day 7.</p>

        <div className="action-buttons">
          <div className="live-community">🔥 Live Community</div>
          <button className="explore-btn">Explore Ikara.club</button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
