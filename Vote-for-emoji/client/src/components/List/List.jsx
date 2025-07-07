import { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    return (
      <ul className="list-group list-group-horizontal">
        {this.props.emojis.map((emoji) => (
          <Item key={emoji.id} emoji={emoji} onVote={this.props.onVote} />
        ))}
      </ul>
    );
  }
}

export default List;
