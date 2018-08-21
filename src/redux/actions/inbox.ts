import { TInboxMenuItems } from "../../models/Inbox";

export const CHANGE_INBOX_MENU = "CHANGE_INBOX_MENU";

export type TChangeInboxMenu = {
  type: typeof CHANGE_INBOX_MENU;
  payload: {
    selectedItem: TInboxMenuItems;
  };
};

export type TChangeInboxMenuAC = (
  selectedItem: TInboxMenuItems
) => TChangeInboxMenu;

export const changeInboxMenuAC: TChangeInboxMenuAC = selectedItem => ({
  type: CHANGE_INBOX_MENU,
  payload: {
    selectedItem
  }
});
