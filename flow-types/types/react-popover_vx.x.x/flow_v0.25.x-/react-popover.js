declare module "react-popover" {
  import typeof * as React from "react";

  declare module.exports: typeof Popover;

  declare class Popover mixins React.Component<Popover$Popover$PopoverProps> {}
  declare type Popover$PopoverPlace =
    | "above"
    | "right"
    | "below"
    | "left"
    | "row"
    | "column"
    | "start"
    | "end";

  declare interface Popover$PopoverProps {
    body: React.ReactNode;
    isOpen?: boolean;
    preferPlace?: Popover$PopoverPlace;
    place?: Popover$PopoverPlace;
    onOuterAction?: (event: Event) => void;
    refreshIntervalMs?: number;
    enterExitTransitionDurationMs?: number;
    tipSize?: number;
    className?: string;
    style?: React.CSSProperties;
    target?: React.ReactElement<any>;
    appendTarget?: Element;
  }
}
