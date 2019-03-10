declare module "react-blessed" {
  import typeof * as React from "react";

  import type { Widgets, screen } from "blessed";

  declare export type Callback = () => void | null | void;
  declare export type renderer = (
    c: global$JSX$Element,
    s: Widgets.Screen,
    callback?: Callback
  ) => React.Component<any, any> | null;
  declare export function render(
    c: global$JSX$Element,
    s: Widgets.Screen,
    callback?: Callback
  ): React.Component<any, any> | null;

  declare export function createBlessedRenderer(bls: any): renderer;
}
