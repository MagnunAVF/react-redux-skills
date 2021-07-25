import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function receiveInfos(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }

  return (
    <div>
      <div>Parent</div>
      <div><span>Name - Age - Is Nerd?</span></div>
      <div>
        <span>{name} - </span>
        <span><strong>{age}</strong> - </span>
        <span>{nerd ? "True" : "False"}</span>
      </div>
      <IndirectChild whenClicked={receiveInfos}></IndirectChild>
    </div>
  );
};
