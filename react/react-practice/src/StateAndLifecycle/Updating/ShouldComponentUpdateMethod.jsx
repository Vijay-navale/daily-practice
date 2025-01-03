import React, { Component } from "react";

export default class ShouldComponentUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shouldComponentUpdate Method",
    };
  }
  shouldComponentUpdate() {
    console.log("inside shouldComponentUpdate");
    return false; //Change to true for state to update
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <p>This is a {this.state.name}</p>
      </div>
    );
  }
}
