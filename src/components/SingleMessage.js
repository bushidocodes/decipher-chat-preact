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
        <Sender>Test</Sender>
        <Timestamp>9:00pm</Timestamp>
      </MessageHeader>
      <Content>Test content stuff hello</Content>
    </Message>
  );
}

export default SingleMessage;
