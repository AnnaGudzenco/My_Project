import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ toggleModal, card }) => {
  return (
    <div>
      <button className="btn" onClick={() => toggleModal(card)}>
        Add to cart
      </button>
    </div>
  );
};

Button.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};
export default Button;
