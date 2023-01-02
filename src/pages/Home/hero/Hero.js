import React from "react";
import { Link } from "react-router-dom";
import "./hero.scss";

export default function hero() {
  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="home-nav">
          <div className="nav">
            <div className="nav-main-home">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg"
                    alt="logo"
                  />
                </Link>
                <Link
                  style={{ color: "#dcd7c9", textDecoration: "none" }}
                  to="/explore"
                >
                  <div className="nav-search">
                    <span>Search</span>
                  </div>
                </Link>
              </div>
              <div className="explore">
                <div className="nav-links">
                  <p>Raise Funding</p>
                  <Link
                    style={{ color: "#dcd7c9", textDecoration: "none" }}
                    to="/register"
                  >
                    <span>SignUp</span>
                  </Link>
                  <Link
                    style={{ color: "#dcd7c9", textDecoration: "none" }}
                    to="/login"
                  >
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-container">
            <h1>Invest For Better World</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
            </span>
            <button>Raise Funds</button>
          </div>
        </div>
      </div>
    </div>
  );
}
