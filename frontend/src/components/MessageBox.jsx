import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function MessageBox({ message, action }) {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(action);
  };

  return (
    <div className="alert">
      <p>{message}</p>
      <button className="card-btn" onClick={closeHandler}>
        Close
      </button>
    </div>
  );
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default MessageBox;
