declare module "react-pointable" {
  import typeof * as React from "react";

  declare export type TouchAction =
    | "auto"
    | "none"
    | "pan-x"
    | "pan-y"
    | "manipulation";
  declare export type PointableProps = {
    tagName?: $Keys<ElementTagNameMap>,
    touchAction?: TouchAction,
    elementRef?: (el: HTMLElement | SVGElement) => void
  } & React.HTMLAttributes<Element> &
    React.SVGAttributes<Element>;

  declare export default class Pointable
    mixins React.Component<PointableProps> {
    static defaultProps: {
      tagName: "div",
      touchAction: "auto"
    };
  }
}
