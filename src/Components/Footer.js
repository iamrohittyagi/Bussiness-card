import React from "react";

function Footer() {
  return (
    <div className="socials">
      <div className="social-icon">
        <img src={require("../static/Twitter Icon.png")} alt="Twitter Icon" />
      </div>
      <div className="social-icon">
        <img src={require("../static/Facebook Icon.png")} alt="Facebook Icon" />
      </div>
      <div className="social-icon">
        <img src={require("../static/Instagram Icon.png")} alt="Instagram Icon" />
      </div>
      <div className="social-icon">
        <img src={require("../static/GitHub Icon.png")} alt="GitHub Icon" />
      </div>
    </div>
  );
}

export default Footer;
