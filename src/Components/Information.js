import React from "react";

function Information() {
  return (
    <div className="info">
      <div className="image-container">
        <img src={require("../static/profile.png")} alt="profile-photo" className="profile-pic"/>
      </div>
      <div className="name">
        <h1>Rohit Tyagi</h1>
      </div>
      <div className="designation">
        <h4>Frontend Developer</h4>
      </div>

      <div className="website">
        <h6>rohittyagi.website</h6>
      </div>
      <div className="buttons">
        <button className="buttton-left">
          <img src={require("../static/Icon.png")} alt="email-icon" />
          <h4>Email</h4>
        </button>
        <button className="button-right">
          <img src={require("../static/Vector.png")} alt="LinkedIn-icon" />
          <h4>LinkedIn</h4>
        </button>
      </div>
    </div>
  );
}

export default Information;
