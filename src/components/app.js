import { h, Component } from "preact";
import { Router } from "preact-router";

import MessageContainer from "./MessageContainer";

// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

import { Provider } from "preact-redux";
import store from "../store";

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Provider store={store}>
        <MessageContainer />
      </Provider>
    );
  }
}
