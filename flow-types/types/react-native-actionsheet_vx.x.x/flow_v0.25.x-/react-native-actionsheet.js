declare module "react-native-actionsheet" {
  import typeof * as React from "react";

  declare export interface ActionSheetProps {
    options: React.Node[];
    onPress: (index: number) => void;
    title?: string;
    message?: string;
    tintColor?: string;
    cancelButtonIndex?: number;
    destructiveButtonIndex?: number;
    styles?: { [key: string]: any };
  }
  declare export default class ActionSheet
    mixins React.Component<ActionSheetProps> {
    show: () => void;
  }
}
