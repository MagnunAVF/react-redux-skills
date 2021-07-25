import React from "react";

export default (props) => {
  const callbackFunc = props.whenClicked;
  return (
    <div>
      <div>Child</div>
      <button onClick={(_) => callbackFunc("João", 53, true)}>
        Send Infos!
      </button>
    </div>
  );
};
