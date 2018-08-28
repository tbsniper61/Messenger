import * as React from "react";
import * as css from "./theme/messages.css";
import * as favoriteIcon from "./../../../../assets/icons/favorite-icon.svg";
// import * as sendIcon from "./../../../../assets/icons/send-icon.png";
// import * as attachIcon from "./../../../../assets/icons/attach-icon.png";
// import * as emojiIcon from "./../../../../assets/icons/emojis-icon.png";
// import * as callIcon from "./../../../../assets/icons/call-icon.png";
// import * as videoIcon from "./../../../../assets/icons/video-icon.png";
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

    return (
      <div className={theme.container}>
        <div className={css.header}>
          <div className={css.userInfo}>
            <div className={css.username}>{username}</div>
            <div className={css.isTyping}>is typing...</div>
          </div>
          <div className={css.headerIcon}>
            <Icon source={favoriteIcon} />
          </div>
          <div className={css.headerIcon}>{/*<Icon source={callIcon} />*/}</div>
          <div className={css.headerIcon}>
            {/*<Icon source={videoIcon} />*/}
          </div>
        </div>
        <div className={css.content}>{messages.map(this.renderMessage)}</div>
        <div className={css.footer}>
          <div className={css.attach}>attach</div>
          <input
            type="text"
            placeholder={"Type your message..."}
            className={css.textInput}
          />
          <div className={css.emoji}>emoji</div>
          <div className={css.send}>{/*<Icon source={sendIcon} />*/}</div>
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
