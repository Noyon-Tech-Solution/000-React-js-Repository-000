import React, { useEffect, useState } from "react";
import axios from "axios";

const DB = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:3000/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <article key={user.id}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
          </article>
        );
      })}
    </div>
  );
};

export default DB;
