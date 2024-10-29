import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [loads, setLoads] = useState(false);
  useEffect(() => {
    console.log("useEffect is print after randering");
  }, [loads]);
  return (
    <div>
      {console.log("Randering is Run Before useEffect")}
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setLoads(() => {
            !loads;
          });
        }}
      >
        Loads
      </button>
    </div>
  );
};

export default UseEffect;

{/*  03 How to use useEffect in React.Js */}