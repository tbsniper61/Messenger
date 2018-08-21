import * as React from "react";
import * as cn from "classnames";
import * as css from "./theme/inbox.css";
import * as iconCss from "./theme/icon.child.css";
import * as addIcon from "../../../../assets/icons/add.svg";
import { themr } from "react-css-themr";
import { Component, ComponentClass, Fragment } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { Hr } from "../../../ui-kit/components/hr/hr";
import {
  PRIMARY_MENU_ITEMS,
  SETTINGS_MENU_ITEMS,
  PrimaryMenuItem,
  TInboxMenuItems,
  TCounts
} from "../../../../models/Inbox";

export type TRawInboxProps = {
  theme: MakeTheme<
    | "container"
    | "header"
    | "title"
    | "menuItem"
    | "count"
    | "cathegoryTitle"
    | "menuItem__active"
  >;
  selectedItem: TInboxMenuItems;
  counts: TCounts;
  onSelect: (selectedItem: TInboxMenuItems) => void;
};

export class RawInbox extends Component<TRawInboxProps> {
  render() {
    const { theme, selectedItem, counts } = this.props;

    return (
      <div className={theme.container}>
        <div className={theme.header}>
          <div className={theme.title}>Inbox</div>
          <Icon source={addIcon} theme={iconCss} />
        </div>

        {PRIMARY_MENU_ITEMS.map(el => {
          const shouldRenderHr = el === PrimaryMenuItem.Teams;

          const itemTheme = cn(theme.menuItem, {
            [theme.menuItem__active as string]: el === selectedItem
          });

          return (
            <Fragment key={el}>
              {shouldRenderHr && <Hr />}

              <div className={itemTheme} onClick={this.handleItemSelect(el)}>
                <div className={theme.cathegoryTitle}>{el}</div>
                <div className={theme.count}>{counts[el]}</div>
              </div>
            </Fragment>
          );
        })}

        <Hr />

        {SETTINGS_MENU_ITEMS.map(el => {
          const itemTheme = cn(theme.menuItem, {
            [theme.menuItem__active as string]: el === selectedItem
          });

          return (
            <div
              className={itemTheme}
              onClick={this.handleItemSelect(el)}
              key={el}
            >
              <div className={theme.cathegoryTitle}>{el}</div>
            </div>
          );
        })}
      </div>
    );
  }

  handleItemSelect = (item: TInboxMenuItems) => () => this.props.onSelect(item);
}

const defaultTheme = {
  ...css
};

export type TInboxProps = ObjectOptional<TRawInboxProps, "theme">;

export const Inbox: ComponentClass<TInboxProps> = themr("Inbox", defaultTheme)(
  RawInbox
);
