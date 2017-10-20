import { createStore, combineReducers } from "redux";

import messages from "./messages";

const reducer = combineReducers({ messages });

const store = createStore(reducer);

export default store;

export * from "./messages";
