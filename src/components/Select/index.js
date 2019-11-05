import React from "react";
import PropTypes from "prop-types";

const OptionList = props => {
  return props.id === 0 ? (
    <option value={""} disabled>
      {props.item}
    </option>
  ) : (
    <option>{props.item}</option>
  );
};

const Select = props => {
  const optionList = props.data.map((item, id) => {
    return <OptionList key={id} item={item} id={id} />;
  });
  return (
    <select defaultValue={""} className="field card__selection" id="" required>
      {optionList}
    </select>
  );
};

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired
};

OptionList.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired
};

export default Select;
