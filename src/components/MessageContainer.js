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

  render({ messages = [] }, state) {
    return (
      <MessagesList>
        <MessageGroupHeader>Conversation</MessageGroupHeader>
        {messages.map((item, i) => {
          let showHeader;

          if (i === 0 && item.nickname !== "") showHeader = true;
          else if (
            item.nickname !== "" &&
            item.nickname !== messages[i - 1].nickname
          )
            showHeader = true;
          else showHeader = false;

          return (
            <SingleMessage
              sender={item.nickname}
              timestamp={item.timestamp}
              content={item.message}
              header={showHeader}
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
