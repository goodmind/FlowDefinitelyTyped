declare module "redux-test-utils" {
  import type { AnyAction, Store, Dispatch } from "redux";

  declare export function createMockStore(state?: any): mockStore<any>;

  declare export function createMockDispatch(): mockDispatch<any>;

  declare export type mockStore<S> = {} & Store<S> & mockDispatch<S>;

  declare export interface mockDispatch<S> {
    dispatch: Dispatch<S>;
    getActions: () => AnyAction[];
    getAction: (type: any) => AnyAction | void;
    isActionTypeDispatched: (type: any) => boolean;
    isActionDispatched: (action: AnyAction) => boolean;
  }
}
