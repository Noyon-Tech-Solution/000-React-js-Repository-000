import React, { useRef } from "react";

const UseRef = () => {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const userEmail = userEmailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ userName, userEmail, password });
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="text" id="text" ref={userNameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" ref={userEmailRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" ref={passwordRef} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UseRef;

// 12 How to use useRef() Hooks on React js
