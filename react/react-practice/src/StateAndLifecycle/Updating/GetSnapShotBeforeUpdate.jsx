import React, { Component } from "react";

export default class GetSnapshotBeforeUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "constructor Method",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" });
    }, 5000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevProps:-", prevProps);
    console.log("prevState:-", prevState);
    document.getElementById("previous-state").innerHTML =
      "The previous state was " + prevState.name;
    return null; //whatever we are going to return here will get by componentDidUpdate() method in its third parameter
  }
  componentDidUpdate() {
    document.getElementById("current-state").innerHTML =
      "The current state is " + this.state.name;
  }
  render() {
    console.log("this.state.name:-", this.state.name);
    return (
      <>
        <h5>This is a {this.state.name}</h5>
        <p id="previous-state"></p>
        <p id="current-state"></p>
      </>
    );
  }
}
