declare module "react-native-material-design-searchbar" {
  import typeof * as React from "react";

  import type {
    TextInputProps,
    ReturnKeyType,
    ReturnKeyTypeAndroid,
    TextStyle,
    ReturnKeyTypeIOS
  } from "react-native";

  declare export interface SearchBarProps {
    height: number;
    autoCorrect?: boolean;
    returnKeyType?: ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS;
    placeholder?: string;
    padding?: number;
    inputStyle?: TextStyle;
    iconCloseName?: string;
    iconSearchName?: string;
    iconBackName?: string;
    iconSize?: number;
    iconPadding?: number;
    placeholderColor?: string;
    iconColor?: string;
    textStyle?: TextStyle;
    inputProps?: TextInputProps;
    alwaysShowBackButton?: boolean;
    onSearchChange?: (text: string) => void;
    onClose?: () => void;
    onBlur?: () => void;
    onEndEditing?: () => void;
    onSubmitEditing?: () => void;
    onFocus?: () => void;
    onBackPress?: () => void;
  }
  declare export default class SearchBar
    mixins React.Component<SearchBarProps, any> {}
}
