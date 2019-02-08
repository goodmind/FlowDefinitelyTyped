declare var npm$namespace$__ReactFlexr: {
  optimizedResize: typeof __ReactFlexr$optimizedResize,
  findMatch: typeof __ReactFlexr$findMatch,
  setBreakpoints: typeof __ReactFlexr$setBreakpoints,
  findBreakpoints: typeof __ReactFlexr$findBreakpoints,
  getCurrentBreakpoints: typeof __ReactFlexr$getCurrentBreakpoints,
  palm: typeof __ReactFlexr$palm,
  lap: typeof __ReactFlexr$lap,
  portable: typeof __ReactFlexr$portable,
  desk: typeof __ReactFlexr$desk
};
declare type __ReactFlexr$GridProps = {
  /**
   * Vertical Align Sub Cells: top, center, bottom
   */
  align?: "top" | "center" | "bottom",

  /**
   * Horizontal Align Sub Cells: left, center, right
   */
  hAlign?: "left" | "center" | "right",

  /**
   * Override default gutter: '1em', '5%', '10px', etc.
   * Propagates downwards. Cells inside this Grid component
   * will use the same gutter.
   */
  gutter?: string,

  /**
   * All sub cells will be full height.
   */
  flexCells?: boolean
} & React.Props<__ReactFlexr$Grid>;

declare export class __ReactFlexr$Grid
  mixins React.Component<__ReactFlexr$GridProps> {}

declare type __ReactFlexr$CellProps = {
  /**
   * Vertical Align This Cell: top, center, bottom
   */
  align?: "top" | "center" | "bottom",

  /**
   * Override default gutter: '1em', '5%', '10px', etc.
   */
  gutter?: string,

  /**
   * Cell will be full height.
   */
  flex?: boolean,

  /**
   * Takes a fraction. e.g. 1/6
   */
  size?: string | number,

  /**
   * Like size, but only for palm devices.
   * Accepts 'hidden' as well.
   */
  palm?: string | number,

  /**
   * Like size, but only for lap devices.
   * Accepts 'hidden' as well.
   */
  lap?: string | number,

  /**
   * Like size, but only for ( palm + lap ) devices.
   * Accepts 'hidden' as well.
   */
  portable?: string | number,

  /**
   * Like size, but only for desk devices.
   * Accepts 'hidden' as well.
   */
  desk?: string | number
} & React.Props<__ReactFlexr$Cell>;

declare export class __ReactFlexr$Cell
  mixins React.Component<__ReactFlexr$CellProps> {}

/**
 * Simple resize event throttler. Usefull for force updating when the
 * app have been resized. For best performance, use it in your main
 * app component in the componentDidMount life cycle.
 */
declare interface __ReactFlexr$OptimizedResize {
  init: (callback: () => void) => void;
}

declare export var __ReactFlexr$optimizedResize: __ReactFlexr$OptimizedResize;

export type __ReactFlexr$ErgonomicType = "palm" | "lap" | "portable" | "desk";

/**
 * The internal function that Flexr uses to check which ergonomic
 * state it's currently in. It's really useful if you have components
 * outside the grid, that you want to show/hide/manipulate passed properties
 * or stuff in your lifecycle hooks.
 */
declare export var __ReactFlexr$findMatch: (
  ...arguments: __ReactFlexr$ErgonomicType[]
) => boolean;

/**
 * It's posible to force flexr to be in a specific ergonomic state. This is
 * primarily usefull when rendering on the server. E.g. looking at the user
 * agent string on rendering the app in palm/portable if it's an iOS/iPhone
 * or lap/portable if iOS/iPad.
 */
declare export var __ReactFlexr$setBreakpoints: (
  breakpoints: __ReactFlexr$ErgonomicType[]
) => void;

/**
 * Force flexr to find the current breakpoints. Returns an array of the
 * current breakpoints that flexr matches in. If they haven't changed since
 * the last time findBreakpoints() was called, false will be returned. Use
 * in combination with optimizedResize.
 */
declare export var __ReactFlexr$findBreakpoints: () =>
  | __ReactFlexr$ErgonomicType[]
  | boolean;

/**
 * Returns an array of current breakpoints.
 */
declare export var __ReactFlexr$getCurrentBreakpoints: () => __ReactFlexr$ErgonomicType[];

/**
 * The ergonomic breakpoint media query that flexr uses internally.
 */
declare export var __ReactFlexr$palm: string;

/**
 * The ergonomic breakpoint media query that flexr uses internally.
 */
declare export var __ReactFlexr$lap: string;

/**
 * The ergonomic breakpoint media query that flexr uses internally.
 */
declare export var __ReactFlexr$portable: string;

/**
 * The ergonomic breakpoint media query that flexr uses internally.
 */
declare export var __ReactFlexr$desk: string;
declare module "react-flexr" {
  declare export default typeof __ReactFlexr;
}
