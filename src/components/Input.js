import { h, Component } from "preact";
import { connect } from "preact-redux";
import { fetchMessages } from "../store";
import { MessagesList, Message } from "./library";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  onSubmit = () => {
    const messageObject = {
      message: this.state.message
    };
    socket.emit("chat message", messageObject);
  };
  onChange = e => {
    this.setState({ message: e.target.value });
  };
  render() {
    <input value={this.state.message} onChange={this.onChange} />;
  }
}

export default Input;
