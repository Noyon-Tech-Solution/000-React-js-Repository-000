import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";

export default class Conditional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginPage: true,
    };
  }

  // Ternary Conditional Rendering:

  render() {
    const { loginPage } = this.state;
    return <div>{loginPage ? <Home /> : <Login />}</div>;
  }

  // if and else conditonal rendering :

  // render() {
  //   const { loginPage } = this.state;

  //   if (loginPage) {
  //     return <Home />;
  //   } else {
  //     return <Login />;
  //   }
  // }
}

{/* 11 Conditional Rendering in React Js Tutorial */}