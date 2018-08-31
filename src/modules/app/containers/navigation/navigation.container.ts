import { createSelector } from "reselect";
import { TAppState } from "../../../../redux/state";
import { Dispatch } from "redux";
import { changeImAC } from "../../../../redux/actions/im";
import { Messenger } from "../../../../models/Messenger";
import { connect } from "react-redux";
import { Navigation } from "../../components/navigation/navigation";
import { changeMenuVisibility } from "../../../../redux/actions/hamburger";
import { TAction } from "../../../../redux/actions";

const endomorphism = (state: TAppState) => state;
const mapStateToProps = createSelector(endomorphism, state => ({
  selectedIm: state.selectedMessenger,
  isHamburgerHidden: !state.isSmallScreen
}));

const mapDispatchToProps = (dispatch: Dispatch<TAction>) => ({
  onSelect: (im: Messenger) => dispatch(changeImAC(im)(dispatch)),
  onMenuClick: () => dispatch(changeMenuVisibility())
});

export const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation as any);
