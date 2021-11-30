import React from "react";
import { error404 } from "../assets";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mid-row">
      <img src={error404} alt="Error 404" />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
