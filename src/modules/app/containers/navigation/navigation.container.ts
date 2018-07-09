// import * as React from "react";
import { createSelector } from "reselect";
import { TAppState } from "../../../../redux/state";
import { Dispatch } from "redux";
import { changeImAC, TChangeIM } from "../../../../redux/actions/im";
import { Messenger } from "../../../../models/Messenger";
import { connect } from "react-redux";
import { Navigation } from "../../components/navigation/navigation";

const endomorphism = (state: TAppState) => state;
const mapStateToProps = createSelector(endomorphism, state => ({
  selectedIm: state.selectedMessenger
}));

const mapDispatchToProps = (dispatch: Dispatch<TChangeIM>) => ({
  onSelect: (im: Messenger) => dispatch(changeImAC(im))
});

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation as any);
