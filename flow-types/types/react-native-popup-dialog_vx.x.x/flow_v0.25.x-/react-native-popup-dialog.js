declare module "react-native-popup-dialog" {
  import typeof * as React from "react";

  import type {
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    TextStyle
  } from "react-native";

  declare export type AlignTypes = "left" | "right" | "center";
  declare export type OverlayPointerEventTypes = "auto" | "none";
  declare export type SlideFromTypes = "top" | "bottom" | "left" | "right";
  declare export interface DialogContentProps {
    style?: StyleProp<ViewStyle>;
  }
  declare export interface DialogActionListProps {
    bordered?: boolean;
    style?: StyleProp<ViewStyle>;
  }
  declare export interface DialogButtonProps {
    text: string;
    align?: AlignTypes;
    onPress?: (event: GestureResponderEvent) => void;
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    activeOpacity?: number;
    bordered?: boolean;
  }
  declare export interface DialogTitleProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    align?: AlignTypes;
    hasTitleBar?: boolean;
  }
  declare export interface OverlayProps {
    visible?: boolean;
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: string;
    opacity?: number;
    animationDuration?: number;
    showOverlay?: boolean;
    pointerEvents?: string;
    useNativeDriver?: boolean;
  }
  declare export interface DialogProps {
    dialogTitle?: any;
    width?: number;
    height?: number;
    dialogAnimation?: FadeAnimation | ScaleAnimation | SlideAnimation;
    dialogStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    animationDuration?: number;
    hasOverlay?: boolean;
    overlayPointerEvents?: OverlayPointerEventTypes;
    overlayBackgroundColor?: string;
    overlayOpacity?: number;
    visible?: boolean;
    rounded?: boolean;
    onShow?: () => void;
    onDismiss?: () => void;
    onTouchOutside?: () => void;
    onHardwareBackPress?: () => boolean;
    actions?: any[];
    actionContainerStyle?: StyleProp<ViewStyle>;
    actionsBordered?: boolean;
    useNativeDriver?: boolean;
  }
  declare export class FadeAnimation {
    constructor(toValue?: number): this;
    constructor(params: {
      toValue?: number,
      animationDuration?: number
    }): this;
    toValue(toValue: number): void;
    createAnimations(): { [key: string]: any };
  }
  declare export class ScaleAnimation {
    constructor(toValue?: number): this;
    toValue(toValue: number): void;
    createAnimations(): { [key: string]: any };
  }
  declare export class SlideAnimation {
    constructor(toValue?: number): this;
    constructor(params: {
      toValue?: number,
      slideFrom?: SlideFromTypes
    }): this;
    toValue(toValue: number): void;
    createAnimations(): { [key: string]: any };
  }
  declare export class DialogContent
    mixins React.Component<DialogContentProps, any> {}
  declare export class DialogActionList
    mixins React.Component<DialogActionListProps, any> {}
  declare export class DialogButton
    mixins React.Component<DialogButtonProps, any> {}
  declare export class DialogTitle
    mixins React.Component<DialogTitleProps, any> {}
  declare export class Overlay mixins React.Component<OverlayProps, any> {}
  declare export default class Dialog mixins React.Component<DialogProps, any> {
    show(onShown?: () => void): void;
    dismiss(onDismissed?: () => void): void;
  }
}
