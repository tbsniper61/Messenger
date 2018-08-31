import * as React from "react";
import { Component } from "react";

export type TResizeDetectorProps = {
  onWindowResize: (isSmallScreen: boolean) => void;
};

export class ResizeDetector extends Component<TResizeDetectorProps> {
  state = {
    windowWidth: 0
  };

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  updateWindowWidth() {
    const { onWindowResize } = this.props;

    console.log("onWindowResize", onWindowResize);

    onWindowResize(window.innerWidth < 1513);
  }

  render() {
    return <div />;
  }
}
