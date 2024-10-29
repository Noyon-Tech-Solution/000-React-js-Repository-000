import React from "react";

export default function State_Lefting(props) {
  const childData = "I am From Child";
  props.onChildData(childData);
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}

// 03 How to Send Data Child To Parents  & Parents to Child React.Js