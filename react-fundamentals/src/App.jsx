import React from "react";

import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithProps from "./components/basics/WithProps";
import First from "./components/basics/First";

export default (_) => (
  <div id="app">
    <h1>React Fundamentals</h1>
    <Random min={1} max={60} />
    <Fragment />
    <WithProps title="Student Score" student="Pedro Silva" score={4.1} />
    <WithProps title="Student Score" student="Maria Rosa" score={9.3} />
    <First></First>
  </div>
);
