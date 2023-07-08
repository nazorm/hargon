import React, { useState } from "react";
import "./styles.scss";
import eyeIcon from "../../assets/eye.svg";
import { validationState } from "./data";
import { useNavigate } from "react-router-dom";
import hargonLogo from "../../assets/logo.svg";
import { Select } from "antd";

export const MerchantForm = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [industry, setIndustry] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    website: "",
    password: "",
  });

  const handleDetailChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (value) => {
    setIndustry(value);
  };

  const handlePasswordDisplay = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = () => {
    const userData = {
      ...userDetails,
      industry: industry,
    };
    console.log(userData);
    navigate(
      `/verify/${
        userDetails.email ? userDetails.email : "nnadozienazorm@gmail.com"
      }`
    );
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <section className="merchant-section">
      <div className="logo-container">
        <img
          src={hargonLogo}
          className="logo"
          alt="hargon-logo"
          onClick={navigateHome}
        />
      </div>
      <h3 className="merchant-heading">Create a Merchant Account </h3>
      <form className="merchant-form">
        <input
          type="text"
          placeholder="</KodeHex>"
          name="username"
          className="merchant-input"
          onChange={handleDetailChange}
          value={userDetails.username}
        />
        {userDetails.username && (
          <p className="info">{userDetails.username} is the new Username</p>
        )}
        <input
          type="text"
          placeholder="Business Name"
          name="businessName"
          className="merchant-input"
          onChange={handleDetailChange}
          value={userDetails.businessName}
        />
        {userDetails.businessName && (
          <p className="info">
            {userDetails.businessName} is the new Business name
          </p>
        )}
        <input
          type="text"
          placeholder="Business Phone Number"
          name="phoneNumber"
          className="merchant-input"
          onChange={handleDetailChange}
          value={userDetails.phoneNumber}
        />
        {userDetails.phoneNumber && (
          <p className="info">
            {userDetails.phoneNumber} is the new Phone number
          </p>
        )}

        <Select
          defaultValue="Industry"
          onChange={handleChange}
          options={[
            { value: "Industry", label: "Industry", disabled: true },
            { value: "Agriculture", label: "Agriculture" },
            { value: "Oil and Gas", label: "Oil and Gas" },
            { value: "Manufacturing", label: "Manufacturing" },
            { value: "Media", label: "Media" },
          ]}
        />

        <input
          type="email"
          placeholder="Business Email"
          name="email"
          className="merchant-input"
          onChange={handleDetailChange}
          value={userDetails.email}
        />
        {userDetails.email && (
          <p className="info">{userDetails.email} is the new Email</p>
        )}
        <input
          type="text"
          placeholder="Business Website or social handle"
          name="website"
          className="merchant-input"
          onChange={handleDetailChange}
          value={userDetails.website}
        />
        {userDetails.website && (
          <p className="info">{userDetails.website} is the new Website</p>
        )}
        <div className="password-container">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            className="merchant-input"
            onChange={handleDetailChange}
            value={userDetails.password}
          />
          <img
            src={eyeIcon}
            alt="password-eye"
            className="password-icon"
            onClick={handlePasswordDisplay}
          />
        </div>
        <div className="validations">
          {validationState.map((data) => {
            return (
              <div className="validation-container" key={data.id}>
                <img
                  src={data.validationIcon}
                  alt="validation-icon"
                  className="validation-icon"
                />
                <span className="validation-text">{data.text}</span>
              </div>
            );
          })}
        </div>

        <button className="signup-btn" onClick={handleSubmit}>
          Sign Up
        </button>
        <p className="merchant-account-holder">
          Already have an account?{" "}
          <span className="merchant-account-holder-cta">Sign In</span>
        </p>
      </form>
    </section>
  );
};
