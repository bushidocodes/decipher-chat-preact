import { h, Component } from "preact";
import { connect } from "preact-redux";
import { fetchMessages } from "../store";
import { Submit, TextArea, InputWrapper } from "./library";
import SendButton from "./library/SendButton";

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
    return (
      <InputWrapper>
        <TextArea />
        <Submit onChange={this.onChange}>
          <SendButton />
        </Submit>
      </InputWrapper>
    );
  }
}

export default Input;
