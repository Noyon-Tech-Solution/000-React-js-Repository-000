import React, { useState } from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

export default function Components() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Noyon" },
    { id: 2, userName: "Sakib" },
  ]);

  const handleRemove = (id) => {
    const filterUser = users.filter((user) => user.id !== id);
    setUsers(filterUser);
  };

  const handleAddUser = (newUser) => {
    setUsers((previouseUser) => [...previouseUser, newUser]);
  };

  return (
    <>
      <NewUser handleAddUser={handleAddUser} />
      <Users users={users} onRemove={handleRemove} />
    </>
  );
}
