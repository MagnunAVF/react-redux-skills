import React from "react";
import IndirectChild from "./IndirectChild";

export default (props) => {
  function receiveInfos(name, age, nerd) {
    console.log(`Name: ${name}, Age: ${age}, IsNerd: ${nerd}`);
  }
  return (
    <div>
      <div>Parent</div>
      <IndirectChild whenClicked={receiveInfos}></IndirectChild>
    </div>
  );
};
