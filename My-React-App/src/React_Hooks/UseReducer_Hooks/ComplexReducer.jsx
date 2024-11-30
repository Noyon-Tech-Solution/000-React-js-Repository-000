import React, { useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counter1: state.counter1 + action.value };
    case "decrement1":
      return { ...state, counter1: state.counter1 - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

export default function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>Count1 : {count.counter1}</h1>
        <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
          Increment by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
          Decrement by 1
        </button>
      </div>

      <div>
        <h1>Count2 : {count.counter2}</h1>
        <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
          Increment by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
          Decrement by 1
        </button>
      </div>
    </>
  );
}

/* 08 How to use useReducer() Hooks on React js */
