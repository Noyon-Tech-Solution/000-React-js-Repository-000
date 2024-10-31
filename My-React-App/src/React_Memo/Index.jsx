import React, { useCallback, useState } from "react";
import Message from "./Message";

const Index = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  //! This Function Used useCallbackHooks()
  const handleIncrement = useCallback(()=>{
    setCount((count) => count + 2)
  }, [count])

  console.log("page rendering");
  return (
    <div>
      {toggle ? "on" : "off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message numberOfMessage={count} onHandleMessage={handleIncrement} />
    </div>
  );
};

export default Index;
