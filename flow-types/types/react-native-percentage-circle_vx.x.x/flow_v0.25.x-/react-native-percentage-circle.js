declare module "react-native-percentage-circle" {
  import typeof * as React from "react";

  import type { TextStyle } from "react-native";

  declare export interface PercentageCircleProps {
    color?: string;
    bgcolor?: string;
    innerColor?: string;
    radius?: number;
    percent?: number;
    borderWidth?: number;
    textStyle?: TextStyle[];
    disabled?: boolean;
  }
  declare export default class PercentageCircle
    mixins React.Component<PercentageCircleProps> {}
}
