declare module "react-tether" {
  declare export default typeof TetherComponent;

  import typeof * as React from "react";

  import typeof * as Tether from "tether";

  declare class TetherComponent
    mixins React.Component<ReactTether$ReactTether$TetherComponentProps> {}
  declare type ReactTether$TetherComponentProps = {
    renderElementTag?: string,
    renderElementTo?:
      | string
      | {
          appendChild(element: HTMLElement): void
        },
    id?: string,
    className?: string,
    style?: React.CSSProperties,
    onUpdate?: () => void,
    onRepositioned?: () => void
  } & React.Props<TetherComponent> &
    Tether.ITetherOptions;
}
