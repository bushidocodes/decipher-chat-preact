import io from "socket.io-client";
import store, { receiveMessage } from "./store";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("I am now connected to the server!");

  socket.on("chat message", function(msg) {
    console.log("New Message");
    store.dispatch(receiveMessage(msg));
  });
});

export default socket;
