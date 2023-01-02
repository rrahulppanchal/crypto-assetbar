import React from "react";
import Fundcard from "../../../components/fundcard/Fundcard";
import "./firstcat.scss";

export default function Firstcat() {
  return (
    <div>
      <div className="category-name">
        <span>CATEGORY</span>
      </div>
      <div className="main-category">
        <div className="cat-name">
          <Fundcard />
        </div>
        <div className="cat-name">
          <Fundcard />
        </div>
        <div className="cat-name">
          <Fundcard />
        </div>
        <div className="cat-name">
          <Fundcard />
        </div>
      </div>
    </div>
  );
}
