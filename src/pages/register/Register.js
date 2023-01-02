import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="main-register">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
          <span>
            Already have account goto <Link to="/login">Login</Link> page
          </span>
        </form>
      </div>
    </div>
  );
}
