import "./App.css";
import React from "react";

import StudentsList from "./components/repetition/StudentsList";
import FamilyMember from "./components/basics/FamilyMember";
import Family from "./components/basics/Family";
import Card from "./components/layout/Card";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithProps from "./components/basics/WithProps";
import First from "./components/basics/First";
import ProductsTable from "./components/repetition/ProductsTable";

export default () => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#07 - Repetition Challange" color="#FF432E">
        <ProductsTable></ProductsTable>
      </Card>

      <Card title="#06 - Repetition" color="#FF4C65">
        <StudentsList></StudentsList>
      </Card>

      <Card title="#05 - Component with Children" color="#00C8F8">
        <Family lastName="Silva">
          <FamilyMember firstName="Pedro" />
          <FamilyMember firstName="Ana" />
          <FamilyMember firstName="Gustavo" />
        </Family>
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
