import PropTypes from "prop-types";

const Modal = ({ modalHandler, children }) => {
  // Context

  return (
    <div className="modal-container">
      <div className="modal-top">
        <button
          id="close"
          className={`menu-btn`}
          onClick={() => modalHandler({ show: false })}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="modal-main">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  modalHandler: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Modal;
