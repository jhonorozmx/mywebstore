import React from "react";
import PropTypes from "prop-types";
import { clearUserError } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";

function MessageBox({ message }) {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(clearUserError());
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
};

export default MessageBox;
