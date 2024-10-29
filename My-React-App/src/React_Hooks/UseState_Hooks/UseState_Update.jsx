import React, { useState } from "react";

export default function UseState_Update() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 2);
    setCount((count) => count + 3);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment Button</button>
    </div>
  );
}

{
  /* 02 How to use Update_Hooks_useState in React.Js */
}
