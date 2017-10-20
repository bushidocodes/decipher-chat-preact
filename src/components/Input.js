import { h, Component } from "preact";
import { connect } from "preact-redux";
import { fetchMessages } from "../store";
import { Submit, TextArea, InputWrapper } from "./library";
import SendArrow from "./library/SendArrow";

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
    console.log(e.target.value);
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <InputWrapper>
        <TextArea onChange={this.onChange} />
        <Submit onSubmit={this.onSubmit}>
          <SendArrow />
        </Submit>
      </InputWrapper>
    );
  }
}

export default Input;
