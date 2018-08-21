// tslint:disable-next-line
// import { ComponentClass, StatelessComponent } from "react";
import { TAppState } from "../../../../redux/state";
import { createSelector } from "reselect";
import {
  changeInboxMenuAC,
  TChangeInboxMenu
} from "../../../../redux/actions/inbox";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Inbox } from "../../components/inbox/inbox";
import { TInboxMenuItems } from "../../../../models/Inbox";
import { COUNTS } from "../../../../fixtures/inbox";

const endomorphism = (state: TAppState) => state;

const mapStateToProps = createSelector(endomorphism, state => ({
  selectedItem: state.selectedInboxMenu,
  counts: COUNTS // TODO: add middleware getCountsByIM
}));

const mapDispatchToProps = (dispatch: Dispatch<TChangeInboxMenu>) => ({
  onSelect: (selectedItem: TInboxMenuItems) =>
    dispatch(changeInboxMenuAC(selectedItem))
});

export const InboxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox as any);
