import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// export default function UseReducer() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//     </div>
//   );
// }


/* 08 How to use useReducer() Hooks on React js */



const initialState1 = 0;
const initialState2 = 5;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [count1, dispatch1] = useReducer(reducer, initialState1);
  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <>
    <div>
      <h1>Count1 : {count1}</h1>
      <button onClick={() => dispatch1("increment")}>Increment</button>
      <button onClick={() => dispatch1("decrement")}>Decrement</button>
    </div>

    <div>
      <h1>Count2 : {count2}</h1>
      <button onClick={() => dispatch2("increment")}>Increment</button>
      <button onClick={() => dispatch2("decrement")}>Decrement</button>
    </div>
    </>
  );
}