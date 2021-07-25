import React from "react";

export default (props) => {
  const callbackFunc = props.whenClicked;

  const generateAge = () => parseInt(Math.random() * 20) + 50;

  const generateNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Child</div>
      <button
        onClick={(_) => callbackFunc("João", generateAge(), generateNerd())}
      >
        Send Infos!
      </button>
    </div>
  );
};
