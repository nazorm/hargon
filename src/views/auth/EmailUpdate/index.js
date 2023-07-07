import React, { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import hargonLogo from '../../../assets/logo.svg'
export const EmailUpdate = () => {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState("");

  const navigateHome = () => {
    navigate("/");
  };

  const handleNewEmail = (event) => {
    setNewEmail(event.target.value);
  };

  return (
    <section className="email-update-section">
            <div className="logo-container">
        <img
          src={hargonLogo}
          className="logo"
          alt="hargon-logo"
          onClick={navigateHome}
        />
      </div>
      <div></div>
      <h3 className="email-update-section-heading">Enter a valid Email</h3>
      <input
        className="email-update-input"
        placeholder="Email Address"
        value={newEmail}
        onChange={handleNewEmail}
      />
      <button className="signup-btn">Done</button>
    </section>
  );
};
