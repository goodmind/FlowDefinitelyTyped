declare module "react-motion" {
  import type { Component, ReactElement } from "react";

  declare export type Style = {
    [key: string]: number | OpaqueConfig
  };
  declare export type PlainStyle = {
    [key: string]: number
  };
  declare export type Velocity = {
    [key: string]: number
  };

  /**
   * Spring additional configuration
   */
  declare interface SpringHelperConfig {
    /**
     * Specified stiffness
     * @defaults 170
     */
    stiffness?: number;

    /**
     * Specifies damping
     * @defaults 26
     */
    damping?: number;

    /**
     * Specifies both the rounding of the interpolated value and the speed (internal).
     * @defaults 0.01
     */
    precision?: number;
  }
  declare export interface OpaqueConfig {
    val: number;
    stiffness: number;
    damping: number;
    precision: number;
  }

  /**
   * <Motion/> properties
   */
  declare interface MotionProps {
    /**
     * The default style. Being ignored on subsequent renders
     * @default Object with same keys as in style whose values are the initial numbers you're interpolating on
     */
    defaultStyle?: PlainStyle;

    /**
     * Object that maps to either number or opaque config returned by spring().
     * Must keep same keys throughout component's existence
     */
    style: Style;

    /**
     * Callback with your interpolated styles. Must return one react element to render
     * @param interpolatedStyle
     */
    children?: (interpolatedStyle: PlainStyle) => ReactElement<any>;

    /**
     * The callback that fires when the animation comes to a rest.
     */
    onRest?: () => void;
  }
  declare export class Motion mixins Component<MotionProps> {}
  declare interface TransitionStyle {
    /**
     * The ID that TransitionMotion uses to track which configuration is which across renders, even when things are reordered.
     * Typically reused as the component key when you map over the interpolated styles.
     */
    key: string;

    /**
     * Anything you'd like to carry along. Will be preserved on re-renders until key off
     */
    data?: any;

    /**
     * Actual starting style configuration
     */
    style: Style;
  }

  /**
   * Default style for transition
   */
  declare interface TransitionPlainStyle {
    key: string;
    data?: any;
    style: PlainStyle;
  }
  declare type InterpolateFunction = (
    previousInterpolatedStyles?: Array<TransitionPlainStyle>
  ) => Array<TransitionStyle>;

  /**
   * Transition properties
   */
  declare interface TransitionProps {
    /**
     * Default styles on first render
     */
    defaultStyles?: Array<TransitionPlainStyle>;

    /**
     * Styles to interpolate. Accepts array of TransitionStyle objects or interpolated function similar as for
     * <StaggeredMotion/>
     */
    styles: Array<TransitionStyle> | InterpolateFunction;
    children?: (
      interpolatedStyles: Array<TransitionPlainStyle>
    ) => ReactElement<any>;

    /**
     * Triggers when a new element will appear
     * @param styleThatEntered
     */
    willEnter?: (styleThatEntered: TransitionStyle) => PlainStyle;

    /**
     * Triggers when an element will disappear
     * @param styleThatLeft
     */
    willLeave?: (styleThatLeft: TransitionStyle) => Style | void;

    /**
     * Triggers when an element has disappeared
     * @param styleThatLeft
     */
    didLeave?: (styleThatLeft: TransitionStyle) => void;
  }
  declare export class TransitionMotion mixins Component<TransitionProps> {}
  declare interface StaggeredMotionProps {
    /**
     * Default styles
     */
    defaultStyles?: Array<PlainStyle>;

    /**
     * Styles to interpolate
     * @param previousInterpolatedStyles The previously interpolating (array of) styles (undefined at first render, unless defaultStyles is provided).
     */
    styles: (previousInterpolatedStyles?: Array<PlainStyle>) => Array<Style>;
  }
  declare export class StaggeredMotion mixins Component<StaggeredMotionProps> {}

  /**
   * Used in conjunction with the components below. Specifies the how to animate to the destination value, e.g. spring(10, {stiffness: 120, damping: 17}) means "animate to value 10, with a spring of stiffness 120 and damping 17".
   */
  declare export function spring(
    val: number,
    config?: SpringHelperConfig
  ): OpaqueConfig;

  declare export class Presets {
    noWobble: OpaqueConfig;
    gentle: OpaqueConfig;
    wobbly: OpaqueConfig;
    stiff: OpaqueConfig;
  }
  declare export var presets: Presets;
}
