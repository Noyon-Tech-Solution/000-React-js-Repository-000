import React from "react";
import User from "./User";

export default function Users({ users, onRemove }) {
  return (
    <section>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove = {onRemove}/>
      ))}
      ;
    </section>
  );
}
