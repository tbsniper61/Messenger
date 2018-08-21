import { createStore, Store } from "redux";
import { Messenger } from "../models/Messenger";
import { TAction } from "./actions";
import { TUser } from "../models/User";
import { rootReducer } from "./reducers";
import { Option } from "fp-ts/lib/Option";
import { TInboxMenuItems } from "../models/Inbox";

export type TAppState = {
  selectedMessenger: Messenger;
  // users: {
  // 	byMessengerId: {
  // 		[key in Messenger]: TUser[];
  // 	}
  // };
  selectedInboxMenu: TInboxMenuItems;
  selectedUser: Option<TUser>;
  // messages: {
  // 	byUserId: {
  // 		[id: string]: TMessage[];
  // 	}
  // }
};

export const store: Store<TAppState, TAction> = createStore(rootReducer);
