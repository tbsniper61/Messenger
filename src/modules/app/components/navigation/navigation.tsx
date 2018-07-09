import * as React from "react";
import * as css from "./theme/navigation.css";
import * as messageCardCss from "./theme/messeger-card.child.css";
import { Component } from "react";
import { Messenger } from "../../../../models/Messenger";
import { MESSENGERS } from "../../../../fixtures/messenger";
import { MessengerCard } from "../messenger-card/messenger-card";

export type TNavigationProps = {
  selectedIm: Messenger;
  onSelect?: (im: Messenger) => void;
};

export class Navigation extends Component<TNavigationProps> {
  render() {
    const { selectedIm, onSelect } = this.props;

    return (
      <div className={css.container}>
        {MESSENGERS.map(type => (
          <MessengerCard
            theme={messageCardCss}
            type={type}
            isSelected={type === selectedIm}
            onSelect={onSelect}
            key={type}
          />
        ))}
      </div>
    );
  }
}
