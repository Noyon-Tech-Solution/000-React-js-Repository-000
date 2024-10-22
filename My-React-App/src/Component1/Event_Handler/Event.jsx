import React, { Component } from "react";

export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
        changeValue: ""
    };
  }

  handleChange = (e) => {
    this.setState({
        changeValue: e.target.value
    },()=>{
        console.log(e.target.value)
    })
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <h2>{this.state.changeValue}</h2>
      </div>
    );
  }
}

{
  /* 12 Event Handler onChange & onClick in React Js Tutorial */
}
