import socket from "../socket";

const SET_NAME = "SET_NAME";

// Reducer
export default function messagesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.messages;
    case POST_MESSAGE:
      return [...state, action.newMessage];
    default:
      return state;
  }
}
