import React from "react";
import "./ReadyToTransform.css";

// Importing the lock icon from react-icons
import { FaLock } from "react-icons/fa";

// Importing payment method images from the assets folder
import visaImg from "../assets/visa.png";
import mastercardImg from "../assets/mastercard.png";
import upiImg from "../assets/upi.png";
import sslImg from "../assets/ssl.png";

const ReadyToTransform = () => {
  const handleJoinClick = () => {
    console.log("Join Event Clicked");
  };

  return (
    <div className="ready-section">
      <h2 className="ready-title">Ready to Transform Your Habits?</h2>
      <p className="ready-subtitle">
        Join thousands of members building life-changing habits in our supportive community
      </p>

      <button className="join-btn" onClick={handleJoinClick}>
        Join Event
      </button>

      <div className="secure-checkout-box">
        <FaLock className="lock-icon" />
        <span>Secure, 256-bit encrypted checkout</span>
      </div>

      <div className="payment-methods">
        <img src={visaImg} alt="Visa" />
        <img src={mastercardImg} alt="Mastercard" />
        <img src={upiImg} alt="UPI" />
        <img src={sslImg} alt="SSL" />
      </div>

      <p className="footer-note">
        Backed by practitioners &bull; Secure payments
      </p>
    </div>
  );
};

export default ReadyToTransform;
