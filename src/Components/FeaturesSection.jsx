import React, { useEffect } from "react";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="features" className="features-section">
      <h2>Ikara.club Features</h2>
      <p>Everything you need to build lasting habits and transform your life</p>

      <div className="features-grid">
        <div className="feature-card green">
          <span className="icon">👥</span>
          <h3>Community Coaching</h3>
          <p>
            Connect with like-minded individuals and expert coaches in a supportive
            environment.
          </p>
        </div>

        <div className="feature-card peach">
          <span className="icon">🎯</span>
          <h3>Cohort Model</h3>
          <p>
            Join small groups with shared goals for accountability and peer motivation.
          </p>
        </div>

        <div className="feature-card green">
          <span className="icon">🧠</span>
          <h3>AI Suggestions</h3>
          <p>
            Get personalized habit recommendations based on your progress and preferences.
          </p>
        </div>

        <div className="feature-card peach">
          <span className="icon">📅</span>
          <h3>21-Day Streaks</h3>
          <p>
            Build lasting habits through our proven 21-day commitment system.
          </p>
        </div>
      </div>
    </section>
  );
}
