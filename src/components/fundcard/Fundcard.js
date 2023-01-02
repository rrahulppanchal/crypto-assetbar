import React from "react";
import "./fundcard.scss";

export default function Fundcard() {
  return (
    <div className="fund-card">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2019/02/17/16/20/girl-4002547__340.jpg"
          alt="im"
        />
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam
        </p>
        <div className="fund-detail">
          <div className="funding-goal">
            <span>$ 2,000,000</span>
            <p>Funding Goal</p>
          </div>
          <div className="fund-raised">
            <span>$ 1,236,450</span>
            <p>Funds Raised</p>
          </div>
          <div className="days">
            <span>25</span>
            <p>Days Left</p>
          </div>
        </div>
        <button>View Complete Pitch</button>
      </div>
    </div>
  );
}
