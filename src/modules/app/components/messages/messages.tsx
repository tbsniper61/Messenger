import * as React from "react";
import * as css from "./theme/messages.css";
import * as favoriteIcon from "./../../../../assets/icons/favorite-icon.svg";
const sendIcon = require("./../../../../assets/icons/send-icon.png");
const attachIcon = require("./../../../../assets/icons/attach-icon.png");
const emojiIcon = require("./../../../../assets/icons/emojis-icon.png");
const callIcon = require("./../../../../assets/icons/call-icon.png");
const videoIcon = require("./../../../../assets/icons/video-icon.png");
import * as favoriteCss from "./theme/favorite.child.css";
import * as sendCss from "./theme/send.child.css";
import * as attachCss from "./theme/attach.child.css";
import * as emojiCss from "./theme/emoji.child.css";
import * as callCss from "./theme/call.child.css";
import * as videoCss from "./theme/video.child.css";
import { themr } from "react-css-themr";
import { Component, ComponentClass } from "react";
import { MakeTheme } from "../../../../utils/make-theme";
import { ObjectOptional } from "../../../../utils/object-optional";
import { Icon } from "../../../ui-kit/components/icon/icon";
import { TMessage } from "../../../../models/Message";
import { OtherMessage } from "../other-message/other-message";
import { SelfMessage } from "../self-message/self-message";
import { TUser } from "../../../../models/User";
import { Option } from "fp-ts/lib/Option";

export type TRawMessagesProps = {
  messages: TMessage[];
  currentUser: TUser;
  selectedUser: Option<TUser>;
  theme: MakeTheme<"container">;
};

export class RawMessages extends Component<TRawMessagesProps> {
  render() {
    const { theme, messages, selectedUser } = this.props;

    const username = selectedUser.map(el => el.name).getOrElse("");

    if (selectedUser.isNone()) {
      return null;
    }

    return (
      <div className={theme.container}>
        <div className={css.flexContainer}>
          <div className={css.header}>
            <div className={css.userInfo}>
              <div className={css.username}>{username}</div>
              <div className={css.isTyping}>is typing...</div>
            </div>
            <div className={css.icons}>
              <Icon source={favoriteIcon} theme={favoriteCss} />
              <Icon source={callIcon} theme={callCss} />
              <Icon source={videoIcon} theme={videoCss} />
            </div>
          </div>
          <div className={css.content}>{messages.map(this.renderMessage)}</div>
          <div className={css.footer}>
            <Icon source={attachIcon} theme={attachCss} />
            <input
              type="text"
              placeholder={"Type your message..."}
              className={css.textInput}
            />
            <Icon source={emojiIcon} theme={emojiCss} />
            <Icon source={sendIcon} theme={sendCss} />
          </div>
        </div>
      </div>
    );
  }

  renderMessage = (message: TMessage) => {
    const { currentUser, selectedUser } = this.props;

    const isCurrentUserMessage = message.userId === currentUser.id;

    if (isCurrentUserMessage) {
      return (
        <SelfMessage
          message={message}
          key={message.id}
          avatar={currentUser.avatar}
        />
      );
    }

    const avatar = selectedUser.map(el => el.avatar).getOrElse("");

    return <OtherMessage message={message} key={message.id} avatar={avatar} />;
  };
}

const defaultTheme = {
  ...css
};

export type TMessagesProps = ObjectOptional<TRawMessagesProps, "theme">;

export const Messages: ComponentClass<TMessagesProps> = themr(
  "Messages",
  defaultTheme
)(RawMessages);