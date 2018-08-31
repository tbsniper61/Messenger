import { combineReducers, ReducersMapObject } from "redux";
import { TAppState } from "../state";
import { TAction } from "../actions";
import { changeImReducer } from "./im";
import { changeUserReducer } from "./user";
import { changeInboxMenuReducer } from "./inbox";
import { resizeWindowReducer } from "./resize-detector";

export const reducerMapObj: ReducersMapObject<TAppState, TAction> = {
  selectedMessenger: changeImReducer,
  selectedInboxMenu: changeInboxMenuReducer,
  selectedUser: changeUserReducer,
  isSmallScreen: resizeWindowReducer,
  currentUser: () => ({
    id: "currentUser",
    name: "curr User",
    avatar: "",
    phone: "1111111111",
    birthday: new Date(1990, 8, 1),
    gender: "male",
    language: "english",
    location: "California, LA"
  })
};

export const rootReducer = combineReducers(reducerMapObj);
