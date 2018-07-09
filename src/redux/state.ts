import { createStore, Store } from "redux";
import { Messenger } from "../models/Messenger";
import { TAction } from "./actions";
import { TUser } from "../models/User";
import { rootReducer } from "./reducers";
import { Option } from "fp-ts/lib/Option";

export type TAppState = {
  // messengers: TMessenger[];
  selectedMessenger: Messenger;
  // users: {
  // 	byMessengerId: {
  // 		[key in Messenger]: TUser[];
  // 	}
  // };
  selectedUser: Option<TUser>;
  // messages: {
  // 	byUserId: {
  // 		[id: string]: TMessage[];
  // 	}
  // }
};

export const store: Store<TAppState, TAction> = createStore(rootReducer);
