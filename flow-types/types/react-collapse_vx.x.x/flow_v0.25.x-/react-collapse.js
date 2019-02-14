declare module "react-collapse" {
  import typeof * as React from "react";

  declare export type CollapseProps = {
    isOpened: boolean,
    children: React.ReactNode,
    springConfig?: {
      [key: string]: number
    },
    forceInitialAnimation?: boolean,
    hasNestedCollapse?: boolean,
    fixedHeight?: number,
    theme?: {
      collapse: string,
      content: string
    },
    style?: React.CSSProperties,
    onRender?: (x: {
      current: number,
      from: number,
      to: number
    }) => void,
    onRest?: () => void,
    onMeasure?: (x: {
      width: number,
      height: number
    }) => void
  } & React.HTMLProps<Collapse>;

  declare export class Collapse mixins React.PureComponent<CollapseProps> {}
  declare export class UnmountClosed
    mixins React.PureComponent<CollapseProps> {}
}
