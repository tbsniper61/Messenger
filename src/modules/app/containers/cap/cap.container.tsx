import { createSelector } from "reselect";
import { TAppState } from "../../../../redux/state";
import { connect } from "react-redux";
import { Cap } from "../../components/cap/cap";

const endomorphism = (state: TAppState) => state;

const mapStateToProps = createSelector(endomorphism, state => ({
  currentUser: state.selectedUser
}));

export const CapContainer = connect(mapStateToProps)(Cap);
