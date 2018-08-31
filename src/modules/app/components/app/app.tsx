import * as React from "react";
import * as css from "./theme/app.css";
import { Provider } from "react-redux";
import { Component } from "react";
import { store } from "../../../../redux/state";
import { NavigationContainer } from "../../containers/navigation/navigation.container";
import { InboxContainer } from "../../containers/inbox/inbox.container";
import { UsersContainer } from "../../containers/users/users.container";
import { UserInfoContainer } from "../../containers/user-info/user-info.container";
import { MessagesContainer } from "../../containers/messages/messages.container";
import { ResizeDetectorContainer } from "../../containers/resize-detector/resize-detector.container";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={css.container}>
          <ResizeDetectorContainer />
          <NavigationContainer />
          <InboxContainer />
          <UsersContainer />
          <MessagesContainer />
          <UserInfoContainer />
        </div>
      </Provider>
    );
  }
}
