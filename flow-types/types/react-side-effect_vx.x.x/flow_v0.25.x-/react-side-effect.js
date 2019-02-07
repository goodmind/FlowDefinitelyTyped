declare module "react-side-effect" {
  import typeof * as React from "react";

  declare interface WithSideEffect {
    <TProp, TState>(
      reducePropsToState: (propsList: TProp[]) => TState,
      handleStateChangeOnClient: (state: TState) => void
    ): ClassDecorator<TProp, TState, TState>;
    <TProp, TState, TServerState>(
      reducePropsToState: (propsList: TProp[]) => TState,
      handleStateChangeOnClient: (state: TState) => void,
      mapStateOnServer: (state: TState) => TServerState
    ): ClassDecorator<TProp, TState | TServerState, TServerState>;
  }
  declare var withSideEffect: WithSideEffect;
  declare type ClassDecorator<TProp, TPeek, TRewind> = (
    component: React.ComponentType<TProp>
  ) => React.ComponentType<TProp> & {
    peek: () => TPeek,
    rewind: () => TRewind
  };

  declare module.exports: typeof withSideEffect;
}
