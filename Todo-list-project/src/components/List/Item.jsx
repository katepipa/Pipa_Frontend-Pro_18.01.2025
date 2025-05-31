import { Component } from "react";
import Button from "./Button";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.item.title,
      priority: props.item.priority,
      status: props.item.status,
    };
  }

  handleChange = (event) => {
    this.setState(
      { [event.target.name]: event.target.value },
      this.updateParent
    );
  };

  updateParent = () => {
    const updatedList = {
      ...this.props.item,
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status,
    };
    this.props.onUpdate(updatedList);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.item.id);
  };

  render() {
    return (
      <div className="card mb-3">
        <div className="card-body row align-items-center">
          <div className="col-md-4 mb-2 mb-md-0">
            <input
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
            />
          </div>
          <div className="col-md-2 mb-2 mb-md-0">
            <select
              className="form-select"
              name="priority"
              value={this.state.priority}
              onChange={this.handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="col-md-3 mb-2 mb-md-0">
            <select
              className="form-select"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="in-progress">In Progress</option>
              <option value="done">Finished</option>
            </select>
          </div>
          <div className="col-md-3 text-md-end">
            <Button className="btn-danger" onClick={this.handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
