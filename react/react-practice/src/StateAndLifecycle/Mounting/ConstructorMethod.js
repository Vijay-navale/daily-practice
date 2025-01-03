import React from "react";

class ConstructorMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Constructor Method",
    };
  }

  render() {
    return (
      <div>
        <p>
          This is a {this.state.name} {this.props.lastName}
        </p>
      </div>
    );
  }
}

export default ConstructorMethod;
