import React from "react";
import PropTypes from "prop-types";

const FormBtn = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

FormBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormBtn;
