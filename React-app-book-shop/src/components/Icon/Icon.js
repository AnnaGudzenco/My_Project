import React from "react";
import PropTypes from "prop-types";
import * as Icons from "../../theme/icons";
import "./icon.scss";
const Icon = ({ type, color, filled, changeFavorite }) => {
  const jsx = Icons[type];
  if (!jsx) {
    return null;
  }

  return (
    <div onClick={changeFavorite} className={`icon icon--${type}`}>
      {jsx({ color, filled })}
    </div>
  );
};
Icon.propTypes = {
  fiiled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  changeFavorite: PropTypes.func.isRequired,
};
Icon.defaultProps = {
  filled: false,
  color: "#ffc107",
};
export default Icon;
