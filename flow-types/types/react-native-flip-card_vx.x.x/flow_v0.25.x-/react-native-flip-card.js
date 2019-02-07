declare module "react-native-flip-card" {
  import type { Component, ReactNode, ComponentClass } from "react";

  import type {
    ViewProps,
    TextProps,
    StyleProp,
    TextInputProps,
    ViewStyle
  } from "react-native";

  declare export interface FlipCardProps {
    style?: StyleProp<ViewStyle>;
    flip?: boolean;
    friction?: number;
    perspective?: number;
    flipHorizontal?: boolean;
    flipVertical?: boolean;
    clickable?: boolean;
    onFlipEnd?: () => void;
    onFlipStart?: () => void;
    alignHeight?: boolean;
    alignWidth?: boolean;
    useNativeDriver?: boolean;
  }
  declare export interface FaceProps {
    chilren: JSX.Element[];
  }
  declare export interface BackProps {
    flipHorizontal: boolean;
    flipVertical: boolean;
    perspective: number;
    chilren: JSX.Element[];
  }
  declare export var Face: ComponentClass<FaceProps>;
  declare export var Back: ComponentClass<BackProps>;
  declare export default class FlipCard mixins Component<FlipCardProps> {}
}
