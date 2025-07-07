import { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type="button"
        className="btn btn-primary mt-2"
      >
        Votes: {this.props.count}
      </button>
    );
  }
}

export default Counter;
