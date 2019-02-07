declare module "react-smooth-scrollbar" {
  import typeof * as React from "react";

  import typeof SmoothScrollbar from "smooth-scrollbar";

  import type {
    ScrollbarOptions,
    ScrollStatus
  } from "smooth-scrollbar/interfaces";

  declare type Scrollbar$ScrollbarProps = {
    /**
     * Pipe to scrollbar.addListener()
     */
    onScroll?: (
      status: ScrollStatus,
      scrollbarInstance: SmoothScrollbar
    ) => void,

    /**
     * Keep scrollbar tracks visible whether it's scrolling or not
     * @default false
     */
    alwaysShowTracks?: boolean,

    /**
     * Optional class name
     */
    className?: string,

    /**
     * Optional style
     */
    style?: React.CSSProperties
  } & $Shape<ScrollbarOptions>;

  declare class Scrollbar
    mixins React.Component<Scrollbar$Scrollbar$ScrollbarProps> {
    /**
     * Scrollbar instance
     */
    scrollbar: SmoothScrollbar;
  }
  declare module.exports: typeof Scrollbar;
}
