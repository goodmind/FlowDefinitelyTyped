declare module "react-native-snackbar-component" {
  import typeof * as React from "react";

  import type { TextStyle } from "react-native";

  declare export interface SnackbarComponentProps {
    accentColor?: string;
    actionText?: string;
    messageColor?: string;
    backgroundColor?: string;
    distanceCallback?: () => void;
    actionHandler?: () => void;
    left?: number;
    right?: number;
    bottom?: number;
    position?: string;
    textMessage?: string;
    autoHidingTime?: number;
    visible?: boolean;
  }
  declare export default class SnackbarComponent
    mixins React.Component<SnackbarComponentProps> {}
}
