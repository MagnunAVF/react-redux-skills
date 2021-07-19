import React from "react";
import FamilyMember from "./FamilyMember";

export default (props) => {
  return (
    <div>
      <FamilyMember firstName="Pedro" lastName="Silva" />
      <FamilyMember firstName="Ana" {...props} />
      <FamilyMember firstName="Gustavo" lastName="Ferreira" />
    </div>
  );
};
