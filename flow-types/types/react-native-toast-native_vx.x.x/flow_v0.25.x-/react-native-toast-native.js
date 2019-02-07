declare module "react-native-toast-native" {
  import type { Platform } from "react-native";

  declare export interface Style {
    width?: number;
    height?: number;
    backgroundColor?: string;
    color?: string;
    borderWidth?: number;
    borderRadius?: number;
    borderColor?: string;
    paddingLeft?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingTop?: number;
    fontSize?: number;
    lines?: number;
    lineHeight?: number;
    xOffset?: number;
    yOffset?: number;
    letterSpacing?: number;
    fontWeight?: string;
  }
  declare interface ToastNative {
    SHORT: any;
    LONG: any;
    TOP: any;
    BOTTOM: any;
    CENTER: any;
    show(message?: string): void;
    show(message: string, duration: any, position: any, styles: Style): void;
  }
  declare var ToastNative: ToastNative;
  declare export default typeof ToastNative;
}
