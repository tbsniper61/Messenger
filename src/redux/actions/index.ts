import { TChangeIM } from "./im";
import { TChangeUser } from "./user";
import { TSendMessage } from "./message";

export type TAction = TChangeIM | TChangeUser | TSendMessage;
