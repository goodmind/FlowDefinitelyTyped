declare module "react-outside-click-handler" {
  import typeof * as React from "react";

  declare export interface DefaultProps {
    disabled: boolean;
    useCapture: boolean;
    display: "block" | "flex" | "inline-block";
  }
  declare export type Props = {
    children: React.ReactNode,
    onOutsideClick: (e: React.MouseEvent<HTMLElement>) => void
  } & $Shape<DefaultProps>;

  declare export default class OutsideClickHandler
    mixins React.Component<Props> {
    static defaultProps: DefaultProps;
  }
}
