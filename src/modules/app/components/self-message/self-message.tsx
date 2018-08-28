import * as React from "react";
import * as css from "./theme/self-message.css";
import * as avatarCss from "./theme/avatar.child.css";
import { themr } from "react-css-themr";
import { Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";
import { format } from "date-fns";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { TMessage } from "../../../../models/Message";

export type TRawSelfMessageProps = {
  message: TMessage;
  avatar: string;
  theme: MakeTheme<"container">;
};

export class RawSelfMessage extends Component<TRawSelfMessageProps> {
  render() {
    const { theme, message, avatar } = this.props;

    return (
      <div className={theme.container}>
        <div className={css.content}>
          <div className={css.text}>{message.content}</div>
          <div className={css.triangle} />
        </div>
        <div className={css.info}>
          <Icon source={avatar} theme={avatarCss} />
          <div className={css.time}>{format(message.date, "HH:mm")}</div>
        </div>
      </div>
    );
  }
}

const defaultTheme = {
  ...css
};

export type TSelfMessageProps = ObjectOptional<TRawSelfMessageProps, "theme">;

export const SelfMessage: ComponentClass<TSelfMessageProps> = themr(
  "SelfMessage",
  defaultTheme
)(RawSelfMessage);
