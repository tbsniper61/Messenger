import * as React from "react";
import * as css from "./theme/navigation.css";
import * as iconCss from "./theme/icon.child.css";
import * as messageCardCss from "./theme/messeger-card.child.css";
import * as hamburgerIcon from "../../../../assets/icons/hamburger-menu.svg";
import { Component } from "react";
import { Messenger } from "../../../../models/Messenger";
import { MESSENGERS } from "../../../../fixtures/messenger";
import { MessengerCard } from "../messenger-card/messenger-card";
import { Icon } from "../../../ui-kit/components/icon/icon";

export type TNavigationProps = {
  selectedIm: Messenger;
  isHamburgerHidden: boolean;
  onSelect: (im: Messenger) => void;
  onMenuClick: () => void;
};

export class Navigation extends Component<TNavigationProps> {
  render() {
    const { selectedIm, onSelect, isHamburgerHidden, onMenuClick } = this.props;

    return (
      <div className={css.container}>
        <div className={css.topPlaceholder}>
          {!isHamburgerHidden && (
            <Icon
              theme={iconCss}
              source={hamburgerIcon}
              onClick={onMenuClick}
            />
          )}
        </div>
        {MESSENGERS.map(type => (
          <MessengerCard
            theme={messageCardCss}
            type={type}
            isSelected={type === selectedIm}
            onSelect={onSelect}
            key={type}
          />
        ))}
        <div className={css.botPlaceholder} />
      </div>
    );
  }
}
