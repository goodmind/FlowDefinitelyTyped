declare module "react-native-material-textfield" {
  import typeof * as React from "react";

  import type {
    StyleProp,
    TextInputProps,
    TextStyle,
    ViewStyle,
    View
  } from "react-native";

  declare export type TextFieldProps = {
    animationDuration?: number,
    fontSize?: number,
    titleFontSize?: number,
    labelFontSize?: number,
    labelHeight?: number,
    labelPadding?: number,
    inputContainerPadding?: number,
    style?: StyleProp<TextStyle>,
    labelTextStyle?: StyleProp<TextStyle>,
    titleTextStyle?: StyleProp<TextStyle>,
    affixTextStyle?: StyleProp<TextStyle>,
    tintColor?: string,
    textColor?: string,
    baseColor?: string,
    label?: string,
    title?: string,
    characterRestriction?: number,
    error?: string,
    errorColor?: string,
    lineWidth?: number,
    activeLineWidth?: number,
    disabled?: boolean,
    disabledLineWidth?: number,
    renderAccessory?: () => JSX.Element,
    clearTextOnFocus?: boolean,
    prefix?: string,
    suffix?: string,
    containerStyle?: StyleProp<ViewStyle>,
    inputContainerStyle?: StyleProp<ViewStyle>,
    onPress?: (event: Event) => void,
    onChangeText?: (text: string) => void
  } & TextInputProps;

  /**
   * Material Style Text Field
   * @see https://github.com/n4kz/react-native-material-textfield/blob/master/src/components/field/index.js
   */
  declare export class TextField mixins React.Component<TextFieldProps, any> {}
}
