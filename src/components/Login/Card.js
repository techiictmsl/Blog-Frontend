import React from "react";
import "./loginCard.css";

const Card = () => {
  return (
    <div className="main-card">
      <div className="card-image-holder">
        <div className="outer-circle">
          <div className="profile-head"></div>
          <div className="profile-body"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-dot-holder">
          <div className="card-dot"></div>
          <div className="card-dot"></div>
          <div className="card-dot"></div>
          <div className="card-dot"></div>
          <div className="card-dot"></div>
        </div>
        <div className="card-dot-holder">
          <div className="card-dot"></div>
          <div className="card-dot"></div>
          <div className="card-dot"></div>
          <div className="card-dot"></div>
          <div className="card-dot"></div>
        </div>
        <div className="card-box"></div>
      </div>
    </div>
  );
};

export default Card;
