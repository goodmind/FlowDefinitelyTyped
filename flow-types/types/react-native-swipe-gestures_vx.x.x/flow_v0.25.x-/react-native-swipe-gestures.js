declare module "react-native-swipe-gestures" {
  import type { Component } from "react";

  import type { PanResponderGestureState } from "react-native";

  declare export interface SwipeDirections {
    SWIPE_UP: "SWIPE_UP";
    SWIPE_DOWN: "SWIPE_DOWN";
    SWIPE_LEFT: "SWIPE_LEFT";
    SWIPE_RIGHT: "SWIPE_RIGHT";
  }
  declare export var swipeDirections: SwipeDirections;
  declare export interface GestureRecognizerConfig {
    velocityThreshold?: number;
    directionalOffsetThreshold?: number;
    gestureIsClickThreshold?: number;
  }
  declare export interface GestureRecognizerProps {
    config?: GestureRecognizerConfig;
    onSwipe?: (gestureName: string, state: PanResponderGestureState) => void;
    onSwipeUp?: (state: PanResponderGestureState) => void;
    onSwipeDown?: (state: PanResponderGestureState) => void;
    onSwipeLeft?: (state: PanResponderGestureState) => void;
    onSwipeRight?: (state: PanResponderGestureState) => void;
  }
  declare export default class GestureRecognizer
    mixins Component<GestureRecognizerProps> {}
}
