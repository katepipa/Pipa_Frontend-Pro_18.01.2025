import { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    const storedList = localStorage.getItem("list");
    if (storedList) {
      this.setState({
        list: JSON.parse(storedList),
      });
    } else {
      const defaultList = [
        {
          id: Date.now(),
          title: "Buy groceries",
          priority: "medium",
          status: "in-progress",
        },
        {
          id: Date.now() + 1,
          title: "Make homework",
          priority: "high",
          status: "in-progress",
        },
        {
          id: Date.now() + 2,
          title: "Read a book",
          priority: "low",
          status: "in-progress",
        },
      ];

      this.setState({ list: defaultList }, () => {
        this.saveToLocalStorage(defaultList);
      });
    }
  }

  saveToLocalStorage = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  addItem = (item) => {
    const list = [...this.state.list, item];
    this.setState({ list }, () => this.saveToLocalStorage(list));
  };

  updateItem = (updatedItem) => {
    const list = this.state.list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    this.setState({ list }, () => this.saveToLocalStorage(list));
  };

  deleteItem = (id) => {
    const list = this.state.list.filter((item) => item.id !== id);
    this.setState({ list }, () => this.saveToLocalStorage(list));
  };

  render() {
    return (
      <>
        <main className="container">
          <Form onAdd={this.addItem} />
          <List
            list={this.state.list}
            onUpdate={this.updateItem}
            onDelete={this.deleteItem}
          />
        </main>
      </>
    );
  }
}

export default App;
