import React, { useEffect, useState } from "react";

const FetchingData_With_UseEffect = () => {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("Fatching is not successful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const todoElements =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  const loadingMessage = <h1>Todo is Loading Now</h1>;
  const errorMessage = <h2>{error}</h2>

  return (
    <div>
      <h1>Todos Title</h1>
      {todoElements}
      {loading && loadingMessage}
      {error && errorMessage}
    </div>
  );
};

export default FetchingData_With_UseEffect;

// 05 How to Fetching Data on useEffect Part-2 in React.Js
