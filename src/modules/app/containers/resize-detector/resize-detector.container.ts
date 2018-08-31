import { Dispatch } from "redux";
import {
  resizeWindowAC,
  TResizeWindow
} from "../../../../redux/actions/hamburger";
import { connect } from "react-redux";
import { ResizeDetector } from "../../components/resize-detector/resize-detector";

const mapDispatchToProps = (dispatch: Dispatch<TResizeWindow>) => ({
  onWindowResize: (selectedItem: boolean) =>
    dispatch(resizeWindowAC(selectedItem))
});

export const ResizeDetectorContainer = connect(
  null,
  mapDispatchToProps
)(ResizeDetector as any);
