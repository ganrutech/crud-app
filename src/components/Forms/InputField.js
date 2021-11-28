import React from "react";

const InputField = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}:</label>
      <input
        type={props.type || "text"}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
