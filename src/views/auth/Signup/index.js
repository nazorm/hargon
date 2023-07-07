import React from "react";
import { accountsData } from "./accountsData";
import arrowRight from "../../../assets/arrow-right.svg";
import hargonLogo from "../../../assets/logo.svg";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/merchant-register");
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <section className="signup-section">
      <div className="logo-container">
        <img
          src={hargonLogo}
          className="logo"
          alt="hargon-logo"
          onClick={navigateHome}
        />
      </div>
      <header className="signup-header">
        <h3 className="header-heading">
          Select which type of account you want to open
        </h3>
        <p className="header-text">
          Select which type of account you want to open
        </p>
      </header>
      <div className="accounts">
        {accountsData.map((data) => {
          return (
            <div className="account" key={data.name} onClick={handleRedirect}>
              <div className="account__inner">
                <img src={data.img} className="account-image" alt="account" />
                <p className="account__type">
                  {data.name}
                  <br /> <br />
                  <span className="account__text">{data.text}</span>
                </p>
              </div>
              {data.isComingSoon ? (
                <span className="coming-soon">Coming soon</span>
              ) : (
                <img src={arrowRight} className="forward-arrow" alt="arrow" />
              )}
            </div>
          );
        })}
      </div>
      <p className="account-holder">
        Already have an account?{" "}
        <span className="account-holder-cta">Sign In</span>
      </p>
    </section>
  );
};
