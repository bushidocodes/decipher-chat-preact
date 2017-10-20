import { MessageGroupHeader, Message } from "./library";

function Message({ sender, timestamp, content }) {
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
