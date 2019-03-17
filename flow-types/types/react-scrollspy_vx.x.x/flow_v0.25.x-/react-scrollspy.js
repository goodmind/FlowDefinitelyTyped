declare module "react-scrollspy" {
  import typeof * as React from "react";

  declare export interface ScrollspyProps {
    items: $ReadOnlyArray<string>;
    currentClassName: string;
    scrolledPastClassName?: string;
    componentTag?: string;
    style?: React.CSSProperties;
    offset?: number;
    rootEl?: string;
    onUpdate?: (item: string) => void;
  }
  declare export default class Scrollspy
    mixins React.Component<ScrollspyProps> {
    onEvent(): void;
    offEvent(): void;
  }
}
