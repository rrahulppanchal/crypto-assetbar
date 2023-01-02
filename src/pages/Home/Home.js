import React from "react";
import Footer from "../../components/footer/Footer";
import Hero from "./hero/Hero";
import Firstcat from "./category1/Firstcat";
import PressRelease from "./press-release/PressRelease";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="open-funding">
        <h1>Open Funding</h1>
        <hr />
        <Firstcat />
        <Firstcat />
        <Firstcat />
      </div>
      <div className="new-funding">
        <h1>New Campaign</h1>
        <hr />
        <Firstcat />
      </div>

      <div className="press-release">
        <h1>Press Release</h1>
        <hr />
        <PressRelease />
      </div>

      <div className="features">
        <h1>Features</h1>
        <hr />
        <PressRelease />
      </div>

      <div className="open-funding">
        <h1>Blogs</h1>
        <hr />
        <Firstcat />
      </div>
      <Footer />
    </div>
  );
}
