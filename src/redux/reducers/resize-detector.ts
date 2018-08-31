import { Reducer } from "redux";
import { RESIZE_WINDOW, TResizeWindow } from "../actions/resize-detector";

export const resizeWindowReducer: Reducer<boolean, TResizeWindow> = (
  state = true,
  action
) => {
  switch (action.type) {
    case RESIZE_WINDOW:
      return action.payload.isSmallScreen;

    default:
      return state;
  }
};
