import * as React from "react";
import { Component } from "react";

export type TResizeDetectorProps = {
  onWindowResize: (isSmallScreen: boolean) => void;
};

export class ResizeDetector extends Component<TResizeDetectorProps> {
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

    onWindowResize(window.innerHeight < 1513);
  }

  render() {
    return <div />;
  }
}
