import * as React from "react";
import * as css from "./theme/app.css";
import { Provider } from "react-redux";
import { Component } from "react";
import { store } from "../../redux/state";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={css.container}>app</div>
      </Provider>
    );
  }
}
