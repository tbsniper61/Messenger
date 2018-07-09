import { combineReducers, ReducersMapObject } from "redux";
import { TAppState } from "../state";
import { TAction } from "../actions";
import { changeImReducer } from "./im";
import { changeUserReducer } from "./user";

export const reducerMapObj: ReducersMapObject<TAppState, TAction> = {
  selectedMessenger: changeImReducer,
  selectedUser: changeUserReducer
};

export const rootReducer = combineReducers(reducerMapObj);
