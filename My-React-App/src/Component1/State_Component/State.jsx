import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
  }

  // increment = () => {
  //   this.setState({
  //     Count: this.state.Count + 1,
  //   });
  // };

  // decrement = () => {
  //   this.setState({
  //     Count: this.state.Count - 1,
  //   });
  // };



  increment() {
    this.setState({
      Count: this.state.Count + 1,
    });
  }

  decrement() {
    this.setState({
      Count: this.state.Count - 1,
    });
  }



  render() {
    const { Count } = this.state;
    return (
      <div>
        <h1>Count: {Count}</h1>
        <button
          style={{
            fontSize: "2rem",
            padding: "0px 15px",
            marginRight: "5px",
            color: "tomato",
            backgroundColor: "black",
            border: "none",
          }}
          onClick={this.increment.bind(this)} //Jodi increment function ta es5 are normal function hoi tahola .bind(this) ata likta hoba / are es6 are arrow function hoi tahola .bind(this) ata likta hoba na / es6 use kora best. 
          disabled={Count === 5 ? true : false}
        >
          +
        </button>
        <button
          style={{
            fontSize: "2rem",
            padding: "0px 18px",
            marginLeft: "5px",
            color: "tomato",
            backgroundColor: "black",
            border: "none",
          }}
          onClick={this.decrement.bind(this)} //Jodi increment function ta es5 are normal function hoi tahola .bind(this) ata likta hoba / are es6 are arrow function hoi tahola .bind(this) ata likta hoba na / es6 use kora best. 
          disabled={Count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}

{
  /* 10 How to create & use state in React.Js */
}
