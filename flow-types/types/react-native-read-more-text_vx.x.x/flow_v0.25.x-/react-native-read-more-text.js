declare module "react-native-read-more-text" {
  import typeof * as React from "react";

  declare export interface ReadMoreProps {
    children: React.ReactNode;
    numberOfLines: number;
    onReady?: () => void;
    renderRevealedFooter: (onPress: () => void) => React.ReactNode;
    renderTruncatedFooter: (onPress: () => void) => React.ReactNode;
  }
  declare export default class ReadMore mixins React.Component<ReadMoreProps> {}
}
