import React, { useState } from "react";

export default function From() {
  //! How To Use UseState with Object in React Js..........
  //? How To Use UseState with Object in React Js..........

  //! This Code Structure is not Good Practice:
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handlerNameSubmite = (e) => {
  //   setName(e.target.value);
  // };
  // const handlerEmailSubmite = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlerPasswordSubmite = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handlerSubmite = (e) => {
  //   console.log("From is Submited");
  //   const userInfo = {
  //     name,
  //     email,
  //     password,
  //   };
  //   console.log(userInfo);
  //   e.preventDefault();
  // };
  //! This Code Structure is not Good Practice:

  //? How To Use UseState with Object in React Js..........
  //! How To Use UseState with Object in React Js..........

  //? This Code Structure is Good Practice:
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handlerChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlerSubmite = (e) => {
    console.log(user);
    e.preventDefault();
  };
  //? This Code Structure is Good Practice:

  return (
    <div>
      <h1>Register Now</h1>
      <form action="#" onSubmit={handlerSubmite}>
        <label htmlFor="name">Name:</label>
        <input
          style={{ margin: "10px" }}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          required
          onChange={handlerChange}
          //! onChange={handlerNameSubmite}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          style={{ margin: "10px" }}
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          required
          onChange={handlerChange}
          //! onChange={handlerEmailSubmite}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          style={{ margin: "10px" }}
          type="text"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          required
          onChange={handlerChange}
          //! onChange={handlerPasswordSubmite}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

{
  /* 04 How to Access of From Value in React.Js */
}
