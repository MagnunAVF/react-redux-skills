import "./Card.css";
import React from "react";

export default (props) => {
  const defaultColor = "#F00";
  const cardStyle = {
    backgroundColor: props.color || defaultColor,
    borderColor: props.color || defaultColor,
  };
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.title}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
