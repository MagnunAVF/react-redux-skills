import React from "react";

export default (props) => {
  return (
    <div>
      <p>Initial Value: {props.initialNumber}</p>
      <p>Current Value: {props.number}</p>
    </div>
  );
};
