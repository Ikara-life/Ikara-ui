import React from "react";
// import { useNavigate } from "react-router-dom";
import "./CuratorSection.css";

// Importing the images from the assets folder
import curator1 from "../assets/curator1.jpg";
import curator2 from "../assets/curator2.jpg";

// A simple component to render the star icons.
const StarRating = ({ rating = 5 }) => (
  <div className="star-rating">
    {Array.from({ length: rating }).map((_, index) => (
      <span key={index}>⭐</span>
    ))}
  </div>
);

// A component for the yellow "Top Presenter" badge.
const TopPresenterBadge = () => (
  <div className="presenter-badge">
    <span>🏆</span> Top 1% Presenter
  </div>
);

const CuratorSection = () => {
  // const navigate = useNavigate();

  const handleLearnMore = (id) => {
    // In a real app, this would navigate to the curator's profile page.
    // navigate(`/curator-profile/${id}`);
    console.log(`Learn more about curator ${id}`);
  };

  return (
    <div className="curators-background">
      <div className="curators-container">
        <h1 className="main-title">Meet Your Curators</h1>
        <p className="main-subtitle">
          World-class experts guiding your habit transformation journey
        </p>
        <div className="curator-grid">
          {/* Card 1: Li Chen */}
          <div className="curator-card">
            <TopPresenterBadge />
            <div className="curator-image-container">
              <img
                src={curator1}
                alt="Li Chen"
                className="curator-image"
              />
               <div className="curator-image-star">⭐</div>
            </div>
            <h3 className="curator-name">Li Chen</h3>
            <p className="curator-title">Lead Wellness Coach</p>
            <p className="curator-specialty">Mindfulness & habit formation expert</p>
            <StarRating />
            <button className="learn-more-btn" onClick={() => handleLearnMore(1)}>
              Learn More
            </button>
          </div>

          {/* Card 2: Michael Torres */}
          <div className="curator-card">
            <TopPresenterBadge />
            <div className="curator-image-container">
              <img
                src={curator2}
                alt="Michael Torres"
                className="curator-image"
              />
              <div className="curator-image-star">⭐</div>
            </div>
            <h3 className="curator-name">Michael Torres</h3>
            <p className="curator-title">Performance Coach</p>
            <p className="curator-specialty">Peak performance & productivity specialist</p>
            <StarRating />
            <button className="learn-more-btn" onClick={() => handleLearnMore(2)}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratorSection;
