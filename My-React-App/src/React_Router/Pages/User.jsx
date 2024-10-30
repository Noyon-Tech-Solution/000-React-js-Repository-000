import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";


//! akana useSearchParams are sahajja input are value search a dakano hoyaca

const User = () => {
  const [search, setSearch] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ name: name, email: email });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Name</h1>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Find Name</button>
      </form>
      {/* <h1>{search.get("id")}</h1>
      <h1>{search.get("name")}</h1>
      <h1>{search.get("email")}</h1> */}
    </div>
  );
};

export default User;
