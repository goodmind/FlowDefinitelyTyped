declare module "hedron" {
  import typeof * as React from "react";

  declare export interface ColumnProps {
    /**
     * You can specify component to use specific tag
     * @default 'div'
     */
    tagName?: $Keys<ElementTagNameMap>;

    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid. This enables debug mode for all the
     * children of this component
     * @default false
     */
    debug?: boolean;

    /**
     * The amount of horizontal columns this row creates.
     * @default 12
     */
    divisions?: number;

    /**
     * If true, disable padding.
     */
    fluid?: boolean;

    /**
     * Width during xs breakpoint.
     */
    xs?: number;

    /**
     * Width during sm breakpoint.
     */
    sm?: number;

    /**
     * Width during md breakpoint.
     */
    md?: number;

    /**
     * Width during lg breakpoint.
     */
    lg?: number;

    /**
     * Width of left margin during xs breakpoint.
     */
    xsShift?: number;

    /**
     * Width of left margin during sm breakpoint.
     */
    smShift?: number;

    /**
     * Width of left margin during md breakpoint.
     */
    mdShift?: number;

    /**
     * Width of left margin during lg breakpoint.
     */
    lgShift?: number;
  }
  declare export interface PageProps {
    /**
     * You can specify component to use specific tag
     * @default 'div'
     */
    tagName?: $Keys<ElementTagNameMap>;

    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid. This enables debug mode for all the
     * children of this component
     * @default false
     */
    debug?: boolean;

    /**
     * Enabling fluid mode disables the fixed width of the Page
     */
    fluid?: boolean;

    /**
     * If not using fluid, set a custom width for the page.
     */
    width?: string;
  }
  declare export interface RowProps {
    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid.
     * @default false
     */
    debug?: boolean;

    /**
     * You can specify component to use specific tag
     * @default 'section'
     */
    tagName?: $Keys<ElementTagNameMap>;

    /**
     * The amount of horizontal columns this row creates.
     * @default 12
     */
    divisions?: number;

    /**
     * Sets the value of the CSS align-content property
     */
    alignContent?: string;

    /**
     * Sets the value of the CSS align-items property
     */
    alignItems?: string;

    /**
     * Sets the value of the CSS align-self property
     */
    alignSelf?: string;

    /**
     * Sets the value of the CSS justify-content property
     */
    justifyContent?: string;

    /**
     * Sets the value of the CSS order property
     */
    order?: string;
  }
  declare export interface HiddenProps {
    /**
     * Draws all child columns with "bounding boxes" for easy
     * visualization of the grid. This enables debug mode for all the
     * children of this component
     * @default false
     */
    debug?: boolean;

    /**
     * Width during xs breakpoint.
     */
    xs?: boolean;

    /**
     * Width during sm breakpoint.
     */
    sm?: boolean;

    /**
     * Width during md breakpoint.
     */
    md?: boolean;

    /**
     * Width during lg breakpoint.
     */
    lg?: boolean;
  }
  declare export interface Breakpoints {
    sm?: number;
    md?: number;
    lg?: number;
  }
  declare export interface BreakpointsProps {
    breakpoints: Breakpoints;
  }
  declare export class Column
    mixins React.Component<ColumnProps & React.HTMLProps<HTMLElement>> {}
  declare export class Page
    mixins React.Component<PageProps & React.HTMLProps<HTMLElement>> {}
  declare export class Row
    mixins React.Component<RowProps & React.HTMLProps<HTMLElement>> {}
  declare export class Hidden
    mixins React.Component<HiddenProps & React.HTMLProps<HTMLElement>> {}
  declare export class BreakpointProvider
    mixins React.Component<BreakpointsProps & React.HTMLProps<HTMLElement>> {}
  declare export function withBreakpoints<T>(
    wrappedComponent: React.ComponentClass<T & BreakpointsProps>
  ): React.ComponentClass<T>;
}
