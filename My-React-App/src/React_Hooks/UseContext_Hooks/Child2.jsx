import React, { useContext } from "react";
import Child3 from "./Child3";
import { userContext } from "./UseContext";

export default function Child2() {
  const { user, text } = useContext(userContext);

  return (
    <div>
      <Child3 />
      <h2>{text}</h2>
    </div>
  );
}
