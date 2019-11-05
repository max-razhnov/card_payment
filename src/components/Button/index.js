import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return <button className="button button__submit">{props.title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
