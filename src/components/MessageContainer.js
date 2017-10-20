import { h, Component } from "preact";
import { connect } from "preact-redux";
import { MessagesList } from "./library";
import SingleMessage from "./SingleMessage";

class MessageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render({ messages }, state) {
    messages = [
      { sender: "sender", timestamp: "timestamp", content: "content" }
    ];
    console.log(messages);
    return (
      <MessagesList>
        {messages &&
          messages.map(item => (
            <SingleMessage
              sender={item.sender}
              timestamp={item.timestamp}
              content={item.content}
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
