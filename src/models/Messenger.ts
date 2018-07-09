export enum Messenger {
  Whatsapp,
  Viber,
  Telegram,
  Skype
}

export type TMessenger =
  | TWhatsappMessenger
  | TViberMessenger
  | TTelegramMessenger
  | TSkypeMessenger;

export type TWhatsappMessenger = {
  id: Messenger.Whatsapp;
  allMessagesCount: number;
  unreadMessagesCount: number;
  groupsCount: number;
  channelsCount: number;
  mediaCount: number;
};

export type TViberMessenger = {
  id: Messenger.Viber;
  allMessagesCount: number;
  unreadMessagesCount: number;
  groupsCount: number;
  channelsCount: number;
  mediaCount: number;
};

export type TTelegramMessenger = {
  id: Messenger.Telegram;
  allMessagesCount: number;
  unreadMessagesCount: number;
  groupsCount: number;
  channelsCount: number;
  mediaCount: number;
};

export type TSkypeMessenger = {
  id: Messenger.Skype;
  allMessagesCount: number;
  unreadMessagesCount: number;
  groupsCount: number;
};
