import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataBase2() {
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    const response = await axios.get("http://localhost:3000/users");
    setUser(response.data);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      {user.map((user) => {
        return (
          <article key={user.id}>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </article>
        );
      })}
    </>
  );
}
