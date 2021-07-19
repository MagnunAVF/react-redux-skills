import "./App.css";
import React from "react";

import Family from "./components/basics/Family";
import Card from "./components/layout/Card";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithProps from "./components/basics/WithProps";
import First from "./components/basics/First";

export default (_) => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#05 - Component with Children" color="#00C8F8">
        <Family lastName="Silva" />
      </Card>

      <Card title="#04 - Random Value" color="#FA6900">
        <Random min={1} max={60} />
      </Card>

      <Card title="#03 - Fragment" color="#E94C6F">
        <Fragment />
      </Card>

      <Card title="#02 - With Props" color="#E8B71A">
        <WithProps title="Student Score" student="Pedro Silva" score={4.1} />
      </Card>

      <Card title="#01 - First Component" color="#588C73">
        <First></First>
      </Card>
    </div>
  </div>
);
