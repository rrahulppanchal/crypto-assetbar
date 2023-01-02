import React from "react";
import "./explorecard.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ExploreCard() {
  return (
    <div className="card-container">
      <div className="main-container">
        <div className="description">
          <div className="profile-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="s"
            />
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              similique tempora est voluptas, quisquam officia qui illum nobis
              excepturi eum.
            </p>
          </div>
        </div>
        <div className="status">
          <div>
            <FiberManualRecordIcon
              defaultValue={30}
              sx={{
                color: "success.main",
                height: "20px",
              }}
            />
          </div>
          <span>Active</span>
        </div>
        <div className="dates">
          <p>Start Date</p>
          <span>22-06-2022</span>
        </div>
        <div className="dates">
          <p>End Date</p>
          <span>22-06-2022</span>
        </div>
      </div>
    </div>
  );
}
