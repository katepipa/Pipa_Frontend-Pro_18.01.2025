import Counter from "./Counter";
import { Component } from "react";

class Item extends Component {
  render() {
    const { emoji, onVote } = this.props;

    return (
      <li className="list-group-item text-center">
        <img
          src={`http://localhost:3000${emoji.image}`}
          alt={emoji.name}
          width="80"
          className="me-2"
        />
        <Counter count={emoji.votes} onClick={() => onVote(emoji.id)} />
      </li>
    );
  }
}

export default Item;
