import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  return (
    <input
      className="field"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

Input.defaultProps = {
  type: "text"
};
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
};
export default Input;
