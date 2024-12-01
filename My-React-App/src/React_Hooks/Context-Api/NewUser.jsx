import React, { useState } from "react";

export default function NewUser({handleAddUser}) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      userName: username,
    };
    handleAddUser(newUser);
    setUsername("");
  };

  return (
    <>
      <h1>User Registation Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={handleChange}
        /> 
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
