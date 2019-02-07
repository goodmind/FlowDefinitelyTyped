declare module "wepy-redux" {
  import typeof wepy from "wepy";

  import type { Store } from "redux";

  declare export interface MapStateToProps {
    [propName: string]: ((state: any) => any) | string;
  }
  declare export interface MapDispatchToProps {
    [propName: string]: ((store: any, ...args: any[]) => void) | string;
  }
  declare export function connect(
    mapStateToProps: MapStateToProps,
    mapDispatchToProps: MapDispatchToProps
  ): <T: wepy.Component>(original: T) => T;

  declare export function setStore(store: Store<any, any>): void;

  declare export function getStore(): Store;
}
