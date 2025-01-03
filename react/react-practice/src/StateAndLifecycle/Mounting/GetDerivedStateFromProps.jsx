import React, { Component } from "react";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Constructor Method",
      lastName: "nope",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("props:-", props);
    console.log("state:-", state);
    return { name: props.nameFromParent }; //mutation still happening
  }
  render() {
    console.log(this.state);
    return <div>This is a {this.state.name}</div>;
  }
}

class GetDerivedStateFromProps extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent nameFromParent="getDerivedStateFromProps Method" />
      </div>
    );
  }
}
export default GetDerivedStateFromProps;
