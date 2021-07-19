import React from "react";

export default function Fragment(props) {
  return (
    // or use <> </>, in this case without attributes
    <React.Fragment key="1">
      <h2>Fragment</h2>
      <p>Take care with this error!</p>
    </React.Fragment>
  );
}
