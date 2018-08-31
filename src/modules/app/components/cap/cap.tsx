import * as React from "react";
import * as css from "./theme/cap.css";
import { Component } from "react";
import { TUser } from "../../../../models/User";
import { Option } from "fp-ts/lib/Option";

export type TCapProps = {
  currentUser: Option<TUser>;
};

export class Cap extends Component<TCapProps> {
  render() {
    const { currentUser } = this.props;

    if (currentUser.isSome()) {
      return null;
    }

    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.qwe}>Select a user to view messages</div>
        </div>
      </div>
    );
  }
}
