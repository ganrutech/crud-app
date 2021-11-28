import React from "react";

const Placeholder = (props) => {
  return (
    <div>
      <p>{props.description}</p>
      <button>{props.btnText}</button>
    </div>
  );
};

export default Placeholder;
