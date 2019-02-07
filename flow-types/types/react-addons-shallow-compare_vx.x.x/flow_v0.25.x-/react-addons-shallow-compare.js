declare module "react-addons-shallow-compare" {
  import type { Component } from "react";

  declare module.exports: typeof shallowCompare;

  declare function shallowCompare<P, S>(
    component: Component<P, S>,
    nextProps: P,
    nextState: S
  ): boolean;
}
