import { Component } from "react";
import Button from "../List/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      priority: "medium",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      id: Date.now(),
      title: this.state.title,
      priority: this.state.priority,
      status: "in-progress",
    };

    this.props.onAdd(newToDo);
    this.setState({ title: "", priority: "medium" });
  };

  render() {
    return (
      <form
        className="d-flex align-items-center flex-wrap gap-2 mb-3"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control form-control-sm w-auto"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
          style={{ minWidth: "200px" }}
        />
        <select
          className="form-select form-select-sm w-auto"
          name="priority"
          value={this.state.priority}
          onChange={this.handleChange}
          style={{ minWidth: "140px" }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <Button type="submit" className="btn-primary">
          Add
        </Button>
      </form>
    );
  }
}

export default Form;
