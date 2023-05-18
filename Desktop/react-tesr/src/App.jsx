import React from "react";
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  plus() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.plus.bind(this)}>+</button>
      </div>
    );
  }
}
export default Test;
