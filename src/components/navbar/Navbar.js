import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-main">
        <div className="logo">
          <Link to="/">
            <img
              src="https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg"
              alt="logo"
            />
          </Link>
          <div className="nav-search">
            <Link
              style={{ color: "#dcd7c9", textDecoration: "none" }}
              to="/explore"
            >
              <span>Search</span>
            </Link>
          </div>
        </div>
        <div className="explore">
          <div className="nav-links">
            <span>Raise Funding</span>
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
  );
}
