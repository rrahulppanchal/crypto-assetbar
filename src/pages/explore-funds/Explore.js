import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Firstcat from "../Home/category1/Firstcat";
import ExploreCard from "./explore-card/ExploreCard";
import "./explore.scss";

export default function Explore() {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="main">
        <div className="explore-container">
          <div className="explore-header">
            <h1>EXPLORE</h1>
            <p>
              Facere, voluptatum! Lorem ipsum, dolor sit amet
              <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search" />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
              alt="s"
            />
          </div>
          <hr />
          <div className="filters">
            <div className="category">
              <form>
                <select name="leave" id="leave">
                  <option value="Choose one">Category</option>
                  <option value="Sick Leave">Health</option>
                  <option value="Maternity Leave">Startups</option>
                  <option value="Other">NGOs</option>
                </select>
              </form>
            </div>
            <div className="category">
              <form>
                <select name="leave" id="leave">
                  <option value="Choose one">Status</option>
                  <option value="Sick Leave">Active</option>
                  <option value="Maternity Leave">Upcoming</option>
                  <option value="Other">Ended</option>
                </select>
              </form>
            </div>
            <div className="category">
              <form>
                <select name="leave" id="leave">
                  <option value="Choose one">Date</option>
                  <option value="Sick Leave">This Week</option>
                  <option value="Maternity Leave">This Month</option>
                  <option value="Other">This Year</option>
                </select>
              </form>
            </div>
          </div>

          <div className="content">
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />

            <Firstcat />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
