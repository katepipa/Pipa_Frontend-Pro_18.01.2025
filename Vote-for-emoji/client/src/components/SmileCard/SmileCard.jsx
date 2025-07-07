import { Component } from "react";

class SmileCard extends Component {
  render() {
    const { emoji } = this.props;

    return (
      <div
        className="card mt-3 p-3 border-success mx-auto"
        style={{ maxWidth: "300px" }}
      >
        <h3 className="text-center">Winner: {emoji.name}</h3>
        <div className="d-flex justify-content-center">
          <img
            src={`http://localhost:3000${emoji.image}`}
            alt={emoji.name}
            width="80"
          />
        </div>
        <p className="text-center mt-2">Votes: {emoji.votes}</p>
      </div>
    );
  }
}

export default SmileCard;
