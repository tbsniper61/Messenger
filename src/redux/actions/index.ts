import { TChangeIM } from "./im";
import { TChangeUser } from "./user";
import { TSendMessage } from "./message";
import { TChangeInboxMenu } from "./inbox";
import { TResizeWindow } from "./resize-detector";

export type TAction =
  | TChangeIM
  | TChangeUser
  | TSendMessage
  | TChangeInboxMenu
  | TResizeWindow;
