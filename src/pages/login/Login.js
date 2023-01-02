import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="main-login">
        <h1>Log In</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <span>
            Don't have account goto <Link to="/register">Register</Link> page
          </span>
        </form>
      </div>
    </div>
  );
}
