import React from "react";
import "./CalendarSection.css";
import yogaImage from "../assets/yoga.webp";

export default function CalendarSection() {
  return (
    <section className="calendar-section">
      <div className="calendar-inner">
        <h2 className="calendar-title">Calendar & Next Event</h2>
        <p className="calendar-sub">
          Stay connected with our community events and workshops
        </p>

        <div className="calendar-grid">
          {/* LEFT: Calendar card */}
          <div className="calendar-card">
            <h3 className="card-heading">Event Calendar</h3>

            <div className="mini-calendar">
              <div className="month-nav">
                <button className="nav-btn" aria-label="previous month">‹</button>
                <div className="month-name">August 2025</div>
                <button className="nav-btn" aria-label="next month">›</button>
              </div>

              <div className="weekday-row">
                <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
              </div>

              <div className="dates-grid">
                {[
                  "", "", "", "", "", "1", "2",
                  "3","4","5","6","7","8","9",
                  "10","11","12","13","14","15","16",
                  "17","18","19","20","21","22","23",
                  "24","25","26","27","28","29","30",
                  "31","", "", "", "", "", ""
                ].map((d, i) => (
                  <div
                    key={i}
                    className={`date-cell ${d === "9" ? "date-checked" : ""} ${d === "12" ? "date-highlight" : ""}`}
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <div className="upcoming-box">
              <div className="dot" aria-hidden="true"></div>
              <div>
                <div className="upcoming-title">Upcoming Event</div>
                <a className="upcoming-link" href="#event">
                  Mindful Morning Habits Workshop – Join Now
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Next Event card */}
          <div className="event-card">
            <div className="event-image-wrap">
              {/* ✅ Public folder reference */}
              <img
                className="event-image"
                src={yogaImage}
                alt="Mindful Morning Habits"
              />
              <span className="featured-pill">Featured Event</span>
            </div>

            <div className="event-body">
              <div className="event-meta">📅 Tuesday, August 12, 2025</div>
              <h3 className="event-title">Mindful Morning Habits Workshop</h3>
              <p className="event-desc">
                Start your day with intention. Learn science-backed morning
                routines that will transform your productivity and well-being.
              </p>

              <div className="event-info-row">
                <div className="info-item">🕒 7:00 AM - 8:30 AM PST</div>
                <div className="info-item">📍 Virtual Event + Recording</div>
              </div>

              <button className="join-btn">Join Event</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
