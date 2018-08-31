export const RESIZE_WINDOW = "RESIZE_WINDOW";

export type TResizeWindow = {
  type: typeof RESIZE_WINDOW;
  payload: {
    isSmallScreen: boolean;
  };
};

export type TResizeWindowAC = (isSmallScreen: boolean) => TResizeWindow;

export const resizeWindowAC: TResizeWindowAC = isSmallScreen => ({
  type: RESIZE_WINDOW,
  payload: {
    isSmallScreen
  }
});
