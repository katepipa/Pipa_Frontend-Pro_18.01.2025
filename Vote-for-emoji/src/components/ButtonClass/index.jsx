import { Component } from "react";

class Input extends Component {
  render() {
    return <input type="text" />;
  }
}

class ButtonClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showInput: true,
    };

    this.clickCounter = this.clickCounter.bind(this);
  }

  clickCounter() {
    this.setState({ counter: this.state.counter + 1, showInput: false });
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {this.state.showInput && <Input />}
        <button onClick={this.clickCounter}>
          {this.props.title}: {this.state.counter}
        </button>
      </>
    );
  }
}

export default ButtonClass;
