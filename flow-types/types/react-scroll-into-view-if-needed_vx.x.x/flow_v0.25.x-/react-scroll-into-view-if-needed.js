declare module "react-scroll-into-view-if-needed" {
  import typeof * as React from "react";

  import typeof * as ScrollIntoViewIfNeeded from "scroll-into-view-if-needed";

  declare export type ReactScrollIntoViewIfNeededProps = {
    options?: ScrollIntoViewIfNeeded.Options,
    active?: boolean,
    elementType?: $Keys<JSX.IntrinsicElements>
  } & React.HTMLProps<HTMLElement>;

  declare export default class ReactScrollIntoViewIfNeeded
    mixins React.Component<ReactScrollIntoViewIfNeededProps> {}
}
