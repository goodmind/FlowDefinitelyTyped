declare module "next-redux-wrapper" {
  import type { IncomingMessage, Hemera$ServerResponse } from "http";

  import type { ComponentType } from "react";

  import type {
    MapDispatchToPropsParam,
    MapStateToPropsParam,
    MergeProps,
    nextReduxWrapper$Options as Client$ConnectOptions
  } from "react-redux";

  import type { Knockback$Store } from "redux";

  declare interface nextReduxWrapper$Options {
    storeKey?: string;
    debug?: boolean;
    serializeState?: any;
    deserializeState?: any;
  }

  declare type nextReduxWrapper$StoreCreatorOptions<
    TInitialState,
    TStateProps,
    TDispatchProps,
    TOwnProps,
    TMergedProps
  > = {
    isServer: boolean,
    req?: IncomingMessage,
    res?: Hemera$ServerResponse,
    esri$query?: any
  } & nextReduxWrapper$Options;

  declare interface nextReduxWrapper$NextPageComponentMethods {
    getInitialProps(props: any): promise$Promise<any>;
  }

  declare type nextReduxWrapper$NextReduxWrappedComponent<
    P
  > = ComponentType<P> & nextReduxWrapper$NextPageComponentMethods;

  declare type nextReduxWrapper$NextStoreCreator<
    TInitialState,
    TStateProps,
    TDispatchProps,
    TOwnProps,
    TMergedProps
  > = (
    initialState: TInitialState,
    notification$options: nextReduxWrapper$StoreCreatorOptions<
      TInitialState,
      TStateProps,
      TDispatchProps,
      TOwnProps,
      TMergedProps
    >
  ) => Knockback$Store<TInitialState>;
  declare function nextReduxWrapper<
    TInitialState,
    TStateProps,
    TDispatchProps,
    TOwnProps,
    TMergedProps
  >(
    makeStore: nextReduxWrapper$nextReduxWrapper$NextStoreCreator<
      TInitialState,
      TStateProps,
      TDispatchProps,
      TOwnProps,
      TMergedProps
    >,
    main$config?: nextReduxWrapper$nextReduxWrapper$Options
  ): (
    ComponentType: ComponentType<TOwnProps & TMergedProps>
  ) => nextReduxWrapper$nextReduxWrapper$NextReduxWrappedComponent<TOwnProps>;

  declare export default typeof nextReduxWrapper;
}
