import {
  MessageGroupHeader,
  Message,
  MessageHeader,
  Sender,
  Timestamp,
  Content
} from "./library";

function SingleMessage({ sender, timestamp, content }) {
  return (
    <Message>
      <MessageHeader>
        <Sender>{sender}</Sender>
        <Timestamp>{timestamp}</Timestamp>
      </MessageHeader>
      <Content>{content}</Content>
    </Message>
  );
}

export default SingleMessage;
