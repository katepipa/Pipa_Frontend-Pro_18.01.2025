import { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const { list, onUpdate, onDelete } = this.props;

    return (
      <div className="mt-3">
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default List;
