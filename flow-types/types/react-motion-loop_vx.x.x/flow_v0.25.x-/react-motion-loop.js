declare module "react-motion-loop" {
  import type { Component, ReactElement } from "react";

  import type { MotionProps, PlainStyle, Style } from "react-motion";

  declare type ReactMotionLoopProps = {
    styleFrom: Style,
    styleTo: Style,
    children?: (interpolatedStyle: PlainStyle) => ReactElement<any>
  } & $Shape<MotionProps>;

  declare export class ReactMotionLoop mixins Component<ReactMotionLoopProps> {}
}
