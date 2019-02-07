declare module "react-swipeable-views" {
  import typeof * as React from "react";

  declare export type OnChangeIndexCallback = (
    index: number,
    indexLatest: number
  ) => void;
  declare export type OnTransitionEndCallback = () => void;
  declare export type OnSwitchingCallback = (
    index: number,
    type: OnSwitchingCallbackTypeDescriptor
  ) => void;
  declare export type OnSwitchingCallbackTypeDescriptor = "move" | "end";
  declare export type AxisType = "x" | "x-reverse" | "y" | "y-reverse";
  declare export interface SpringConfig {
    duration: string;
    easeFunction: string;
    delay: string;
  }
  declare export type SwipeableViewsProps = {
    animateHeight?: boolean,
    animateTransitions?: boolean,
    axis?: AxisType,
    containerStyle?: React.CSSProperties,
    disabled?: boolean,
    enableMouseEvents?: boolean,
    hysteresis?: number,
    ignoreNativeScroll?: boolean,
    index?: number,
    onChangeIndex?: OnChangeIndexCallback,
    onSwitching?: OnSwitchingCallback,
    onTransitionEnd?: OnTransitionEndCallback,
    resistance?: boolean,
    style?: React.CSSProperties,
    slideStyle?: React.CSSProperties,
    springConfig?: SpringConfig,
    slideClassName?: string,
    threshold?: number
  } & React.HTMLProps<HTMLDivElement>;

  declare export interface SwipeableViewsState {
    indexCurrent?: number;
    indexLatest?: number;
    isDragging?: boolean;
    isFirstRender?: boolean;
    heightLatest?: number;
    displaySameSlide?: boolean;
  }
  declare export default class SwipeableViews
    mixins React.Component<SwipeableViewsProps, SwipeableViewsState> {}
}
