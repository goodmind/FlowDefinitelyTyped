declare module "kos-core" {
  import typeof * as React from "react";

  declare type ReactComponent<P = any, S = any> = React.ComponentClass<P, S>;
  declare interface Util {
    getActionType: (
      action: string
    ) => {
      namespace: string | null,
      type: string
    };
  }
  declare interface WrapperConfig {
    model: KosModel<>;
    autoLoad?: boolean;
    autoReset?: boolean;
    namespace?: string;
  }
  declare interface Action<T = any> {
    type: string;
    payload?: $Shape<T>;
  }
  declare export interface KosProps<T = any> {
    dispatch?: (action: Action<T>) => void;
    getParam?: () => string;
    getNamespace?: () => string;
  }
  declare export type KosDispatch = (action: Action<>) => void;
  declare export type GetKosState<T = any> = () => T;
  declare export interface KosModel<T = any> {
    namespace: string;
    initial: T;
    reducers: {
      [key: string]: (
        state: T,
        x: {
          payload: T
        }
      ) => void
    };
    asyncs: {
      [key: string]: (
        dispatch: KosDispatch,
        getState: GetKosState<T>,
        action: Action<>
      ) => void
    };
    setup?: (dispatch: KosDispatch, getState: GetKosState<T>) => void;
    getAsync?: (
      key: string
    ) => (dispatch: KosDispatch, getState?: GetKosState<>) => void;
  }
  declare interface Kos {
    Util: Util;
    registeModel: (model: any) => void;
    removeModel: (namespace: string) => void;
    getModel: (namespace: string) => KosModel<>;
    use: (
      middleware: (api: {
        dispatch: any,
        getState: any
      }) => void
    ) => void;
    Wrapper: (
      config: WrapperConfig
    ) => (component: ReactComponent<any & KosProps<>>) => any;
    start: (Layout: ReactComponent<>, container?: string) => void;
  }
  declare var KOS: Kos;
  declare export default typeof KOS;
}
