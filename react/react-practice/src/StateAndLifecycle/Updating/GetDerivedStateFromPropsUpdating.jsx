import React, { Component } from "react";

export default class GetDerivedStateFromPropsUpdating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This name will change in 5 sec",
      data: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("propssss:-", props);
    console.log("stateeee:-", state);
    return { name: "This will be getDerivedStateFromProps" }; //mutation still happening //when components state updated then the first thing will run is this method getDerivedStateFromProps 
  }
  componentDidMount() {
    //Example 1
    setTimeout(() => {
      this.setState({ name: "This is a componentDidMount Method" });
    }, 5000);

    //Example 2 Calling API Data

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    console.log("state:-", this.state);
    return (
      <div>
        <p>{this.state.name}</p>
        <p>This will print all the name available in API users data</p>
        {this.state.data.map((d) => (
          <h6 key={d.id}>{d.name}</h6>
        ))}
      </div>
    );
  }
}
