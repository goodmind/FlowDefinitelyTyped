declare module "react-lifecycle-component" {
  import type {
    React$ComponentLifecycle,
    React$Component,
    React$ComponentClass
  } from "react";

  import type { Connect } from "react-redux";

  declare export interface LifecycleStateProps<P = {}, S = {}> {
    component: React$ComponentClass<P, S>;
  }
  declare export type LifecycleDispatchProps<
    P = {},
    S = {}
  > = {} & React$ComponentLifecycle<P, S>;

  declare export type Props<P = {}, S = {}> = {} & LifecycleStateProps<P, S> &
    LifecycleDispatchProps<P, S>;

  declare export class LifecycleComponent
    mixins React$Component<
        ReactBootstrapDaterangepicker$Props<any, any>,
        any
      > {}
  declare export function applyLifecycle<P, S>(
    component: React$ComponentClass<P, S>
  ): React$ComponentClass<P & LifecycleDispatchProps<P, S>>;

  declare export var connectWithLifecycle: Connect;
}
