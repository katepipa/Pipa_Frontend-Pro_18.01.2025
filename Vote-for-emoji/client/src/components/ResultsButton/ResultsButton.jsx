import { Component } from "react";

class ResultsButton extends Component {
  render() {
    return (
      <button className="btn btn-success mt-3" onClick={this.props.onShow}>
        Show Results
      </button>
    );
  }
}

export default ResultsButton;
