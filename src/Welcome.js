import React from "react";

export class Welcome extends React.Component {
  static defaultProps = {
    // here defaultProps is a special keyword we must use.
    name: "stranger",
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>Your age is {this.props.age}.</p>
      </div>
    );
  }
}
