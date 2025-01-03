import React, { Component } from "react";

export default class ComponentDidUpdateMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "from previous state",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "to current state" });
    }, 5000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return "Yoo biro"; //whatever we are going to return here will get by componentDidUpdate() method in its third parameter
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prevProps:-", prevProps);
    console.log("prevState:-", prevState);
    console.log(" snapshot:-", snapshot);
    if (prevProps.name !== this.state.name) {
      document.getElementById("statechange").innerHTML =
        "Yes the state is changed";
    }
  }
  render() {
    return (
      <div>
        State was changed {this.state.name}
        <p id="statechange"></p>
      </div>
    );
  }
}
