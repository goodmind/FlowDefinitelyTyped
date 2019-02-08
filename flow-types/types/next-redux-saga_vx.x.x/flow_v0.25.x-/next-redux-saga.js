declare module "next-redux-saga" {
  import type { ComponentType } from "react";

  declare function nextReduxSaga<P>(arg: {
    async: boolean
  }): (BaseComponent: ComponentType<P>) => ComponentType<P>;

  declare function nextReduxSaga<P>(arg: ComponentType<P>): ComponentType<P>;

  declare module.exports: typeof nextReduxSaga;
}
