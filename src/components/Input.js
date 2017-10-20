import { h, Component } from "preact";
import { connect } from "preact-redux";
import { fetchMessages } from "../store";
import { Submit, TextArea, InputWrapper } from "./library";
import SendArrow from "./library/SendArrow";
import socket from "../socket";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    const messageObject = {
      message: this.state.message
    };
    socket.emit("chat message", messageObject);
  };

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <InputWrapper onSubmit={this.onSubmit}>
        <TextArea onChange={this.onChange} />
        <Submit type="submit">
          <SendArrow />
        </Submit>
      </InputWrapper>
    );
  }
}

export default Input;
