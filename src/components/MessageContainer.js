import { h, Component } from "preact";
import { connect } from "preact-redux";
import { MessagesList, Message } from "./library";

class MessageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render({ messages }, state) {
    return (
      <MessagesList>
        {messages &&
          messages.map(item => (
            <Message
              sender={item.sender}
              timestamp={item.timestamp}
              content={content}
            />
          ))}
      </MessagesList>
    );
  }
}

function mapState({ messages }) {
  return { messages };
}

export default connect(mapState)(MessageContainer);
