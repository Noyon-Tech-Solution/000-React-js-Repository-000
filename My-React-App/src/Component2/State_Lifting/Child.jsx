import React from "react";

export default function Child(props) {
  const childData = "I am From Child";
  props.onChildData(childData);
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
}

// 05 How to Send Data Child To Parents  & Parents to Child React.Js