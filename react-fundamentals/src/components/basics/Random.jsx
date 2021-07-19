import React from "react";

export default (props) => {
  const { min, max } = props;
  const value = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Random Value!</h2>
      <p>
        <strong>Min Value: </strong> {min}
      </p>
      <p>
        <strong>Max Value: </strong> {max}
      </p>
      <p>
        <strong>Random Value: </strong> {value}
      </p>
    </div>
  );
};
