import React from "react";
import useFetch from "./UseFetch";

const Custom_Hooks = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const dataElements =
    data &&
    data.map((data) => {
      return <p key={data.id}>{data.title}</p>;
    });

  const errorMessage = <h2>{error}</h2>;
  const loadingMessage = <h2>Data is Loading</h2>;

  return (
    <div>
      <h1>Costom Data Fetching</h1>
      {dataElements}
      {error && errorMessage}
      {loading && loadingMessage}
    </div>
  );
};

export default Custom_Hooks;

// 06 How to create and use Custom-Hooks in React.Js
