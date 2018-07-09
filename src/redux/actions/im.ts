import { Messenger, TMessenger } from "../../models/Messenger";

export const CHANGE_IM = "CHANGE_IM";
export const IM_LOADED = "IM_LOADED";

export type TChangeIM = {
  type: typeof CHANGE_IM;
  payload: {
    im: Messenger;
  };
};

export type TChangeImAC = (im: Messenger) => TChangeIM;

export const changeImAC: TChangeImAC = im => ({
  type: CHANGE_IM,
  payload: {
    im
  }
});

//
export type TImLoaded = {
  type: typeof IM_LOADED;
  payload: {
    messengers: TMessenger[];
  };
};

export type TGetImAC = (messengers: TMessenger[]) => TImLoaded;

export const getImAC: TGetImAC = messengers => ({
  type: IM_LOADED,
  payload: {
    messengers
  }
});
