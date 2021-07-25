import React from "react";

export default (props) => {
  const isEven = props.number % 2 === 0;

  return (
    <div>
      {isEven ? (
        <span>{props.number} is Even</span>
      ) : (
        <span>{props.number} is Odd</span>
      )}
    </div>
  );
};
