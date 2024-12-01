import React, { useState } from "react";
import { userContext } from "./UseContext";
import Child1 from "./Child1";

export default function Parents() {
  const [user, setUser] = useState({ id: "Id Number - 504", name: "Shahadat Hosen Noyon" });
  const [text, setText] = useState("I am user Text");

  return (
    <userContext.Provider value={{user, text}}>
      <Child1 />
    </userContext.Provider>
  );
}
