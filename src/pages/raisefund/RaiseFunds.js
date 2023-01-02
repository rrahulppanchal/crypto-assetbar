import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./raisefunds.scss";

export default function RaiseFunds() {
  return (
    <div className="container">
      <Navbar />
      <div className="funds-inputs">
        <div className="input">
          <span>Organization name:</span>
          <input type="text" placeholder="ABC ltd." />
        </div>
        <div className="input">
          <span>Fund Goal:</span>
          <input type="number" placeholder="$1,000,000" />
        </div>
        <div className="input">
          <span>Days:</span>
          <input type="number" placeholder="15" />
        </div>

        <div className="input">
          <span>Heading Line:</span>
          <input type="text" placeholder="Heading Line" />
        </div>
        <div className="input">
          <span>Heading Line:</span>
          <input type="text" placeholder="Description" />
        </div>
        <div className="inpur">
          <span>Upload an Image:</span>
          <input type="file" />
        </div>
        <div className="input">
          <textarea name="Details">Product Detail</textarea>
        </div>
        <button>Login</button>
      </div>
      <div className="myleave-request">
        <h1>Request Leave</h1>
        <hr />
        <div className="leave-input">
          <div className="leave-row">
            <span> Employee Name:</span>
            <input type="Text" placeholder="Full Name" maxLength="50" />
          </div>
          <div className="leave-row">
            <span>Leave Type:</span>
            <form>
              <select name="leave" id="leave">
                <option value="Choose one">Choose One</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Other">Other</option>
              </select>
            </form>
          </div>

          <div className="leave-row">
            <span>Duration:</span>
            <input type="Number" placeholder="0" />
          </div>
          <div className="leave-row">
            <span> Start Date:</span>
            <input type="Date" />
          </div>
          <div className="leave-row">
            <span> End Date:</span>
            <input type="Date" />
          </div>
          <div className="leave-row">
            <span> Description:</span>
            <input type="Text" placeholder="Description" maxLength="50" />
          </div>
        </div>

        <div className="button">
          <button>Send Leave Request</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
