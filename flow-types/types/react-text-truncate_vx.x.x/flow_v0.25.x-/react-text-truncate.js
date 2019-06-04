declare module "react-text-truncate" {
  import typeof * as React from "react";

  declare export interface TextTruncateProps {
    containerClassName?: string;
    element?: string;
    line?: number | boolean;
    onCalculated?: () => void;
    onTruncated?: () => void;
    onToggled?: (truncated: boolean) => void;
    text?: string;
    textElement?: React.Node;
    textTruncateChild?: React.Node;
    truncateText?: string;
    maxCalculateTimes?: number;
  }
  declare class TextTruncate mixins React.Component<TextTruncateProps> {}
  declare export default typeof TextTruncate;
}
