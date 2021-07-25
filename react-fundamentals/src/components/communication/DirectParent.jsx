import React from "react";
import DirectChild from "./DirectChild";

export default (props) => {
  return (
    <div>
      <span>Name - Age - Is Nerd?</span>
      <DirectChild name="Junior" age={20} nerd={true} />
      <DirectChild name="Gabriel" age={17} nerd={false} />
    </div>
  );
};
