import { Component } from "react";

class Button extends Component {
  render() {
    const { className, onClick, children, type = "button" } = this.props;
    return (
      <button className={`btn ${className}`} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
}

export default Button;
