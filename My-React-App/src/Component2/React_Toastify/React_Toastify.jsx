import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const React_Toastify = () => {
  const handleAddNewTodo = () => {
    toast("Addad Customer Todo");
  };

  const handleDeletTodo = () => {
    toast("Deleted Customer Todo");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleAddNewTodo}>Add New Todo</button>
      <button onClick={handleDeletTodo}>Delete Todo</button>
      <ToastContainer />
    </div>
  );
};

export default React_Toastify;

// 06 How to use React-Toastify-For-Show-Display-Notification in React.Js
