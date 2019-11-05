import React from "react";
import PropTypes from "prop-types";

const Label = props => {
  return <label className="card__title">{props.title}</label>;
};

Label.propTypes = {
  title: PropTypes.string.isRequired
};
export default Label;
