import axios from "axios";
import socket from "../socket";

// Action Types
const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

// Action Creators
export const receiveMessage = newMessage => {
  return { type: RECEIVE_MESSAGE, newMessage };
};

// Reducer
export default function messagesReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return [...state, action.newMessage];
    default:
      return state;
  }
}
