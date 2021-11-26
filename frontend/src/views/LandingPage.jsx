import React from "react";
import { shopping } from "../assets";
const LandingPage = () => {
  return (
    <div className="mid-row">
      <div className="landingpage-content">
        <div className="landingpage-welcome">
          <h1>Welcome</h1>
        </div>
        <div className="landingpage-image">
          <img src={shopping} alt="A guy blogging" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
