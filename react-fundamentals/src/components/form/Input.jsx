import './Input.css'
import React, { useState } from "react";

export default (props) => {
    const [value, setValue] = useState('Initial')

    function handleChange(e) {
        setValue(e.target.value)
    }

  return <div className="Input">
      <h3>Accept Changes</h3>
      <input value={value} onChange={handleChange}/>
      <h3>Read Only</h3>
      <input value={value} readOnly/>
      <h3>Uncontrolled</h3>
      <input value={undefined}/>
  </div>;
};
