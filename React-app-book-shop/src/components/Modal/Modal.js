import React from "react";
import "./modal.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Modal = ({
  toggleModal,

  addToCart,
  headerText,
  modalText,
  btnText,
  openDeleteModal,
  deleteFromCart,
}) => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  return (
    <div
      onClick={isOpen ? openDeleteModal : toggleModal}
      className="modal-container"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal__header">
          <p className="modal__header-text">{headerText}</p>
          {isOpen ? (
            <button
              onClick={openDeleteModal}
              className="modal__header-btn"
            ></button>
          ) : (
            <button
              onClick={toggleModal}
              className="modal__header-btn"
            ></button>
          )}
        </header>
        <div className="modal__wrap">
          <p className="modal__wrap-text">{modalText}</p>
          <div className="btn-wrap">
            {isOpen ? (
              <button onClick={deleteFromCart} className="modal__btn">
                {btnText}
              </button>
            ) : (
              <button onClick={addToCart} className="modal__btn">
                {btnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  toggleModal: PropTypes.func,
  addToCart: PropTypes.func,
};
export default Modal;
