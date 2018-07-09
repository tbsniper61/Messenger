import * as React from "react";
import * as css from "./theme/app.css";
import { Provider } from "react-redux";
import { Component } from "react";
import { store } from "../../../../redux/state";
import { Navigation } from "../navigation/navigation";
import { Messenger } from "../../../../models/Messenger";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={css.container}>
          <Navigation selectedIm={Messenger.Whatsapp} />
        </div>
      </Provider>
    );
  }
}
