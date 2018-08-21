import { TMessage } from "./Message";

export type TUser = {
  id: string;
  name: string;
  avatar: string;
  isOnline?: boolean;
  lastMessage?: TMessage;
};
