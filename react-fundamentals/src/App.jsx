import React from "react";

import First from "./components/basics/First";
import WithProps from "./components/basics/WithProps";
import Fragment from "./components/basics/Fragment";

export default (_) => (
  <div id="app">
    <h1>React Fundamentals</h1>
    <Fragment />
    <WithProps title="Student Score" student="Pedro Silva" score={4.1} />
    <WithProps title="Student Score" student="Maria Rosa" score={9.3} />
    <First></First>
  </div>
);
