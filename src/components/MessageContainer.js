import { h, Component } from "preact";
import { connect } from "preact-redux";
import { MessagesList, MessageGroupHeader } from "./library";
import SingleMessage from "./SingleMessage";
import Input from "./Input";
import _ from "lodash";
class MessageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render({ messages }, state) {
    console.log(messages);
    return (
      <MessagesList>
        <MessageGroupHeader>Conversation</MessageGroupHeader>
        {messages &&
          messages.map((item, i) => {
            // const header =
            //   i === 0 ||
            //   (messages[i - 1] && messages[i - 1].sender !== item.sender);

            return (
              <SingleMessage
                sender={item.nickname}
                timestamp={item.timestamp}
                content={item.message}
                header={item.nickname !== ""}
              />
            );
          })}
        <Input />
      </MessagesList>
    );
  }
}

function mapState({ messages }) {
  return { messages };
}

export default connect(mapState)(MessageContainer);
