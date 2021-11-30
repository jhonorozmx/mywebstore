import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ name, location, route, handler, children }) => {
  return (
    <div className="menu-item">
      <button
        className={`menu-btn ${location === `${route}` ? "current" : ""}`}
        onClick={handler}
      >
        {children}
      </button>
      <span className="tooltip">{name}</span>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  handler: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default MenuItem;
