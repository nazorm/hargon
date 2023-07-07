import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.scss";
import OtpInput from "react-otp-input";
import hargonLogo from "../../../assets/logo.svg";

export const OtpPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [otp, setOtp] = useState("");

  const inputStyle = {
    width: "50px",
    height: "50px",
    border: "1px solid #E5E7EB",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const handleChangeEmail = () => {
    navigate("/update/email");
    console.log("here");
  };
  const navigateHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    console.log(otp);
  };
  return (
    <section className="otp-section">
      <div className="logo-container">
        <img
          src={hargonLogo}
          className="logo"
          alt="hargon-logo"
          onClick={navigateHome}
        />
      </div>
      <h1 className="otp-heading"> OTP Verification</h1>
      <p className="otp-subheading">
        We sent you an OTP code to this email{" "}
        <span className="otp-user-email">{slug} </span>
      </p>
      <p className="otp-cta" onClick={handleChangeEmail}>
        Change Email
      </p>
      <div className="otp-container">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          containerStyle={"container-style"}
          inputStyle={inputStyle}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <p className="otp-resend">
        Didn’t get an OTP code? <span className="otp-cta">RESEND</span>
      </p>
      <button className="signup-btn" onClick={handleSubmit}>
        Verify
      </button>
    </section>
  );
};
