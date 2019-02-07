declare module "redux-testkit" {
  import typeof * as Redux from "redux";

  import type { ThunkAction } from "redux-thunk";

  declare export interface ReducerTestkit {
    expect: (
      action: Redux.Action
    ) => {
      toReturnState(expected: any): void,
      toStayTheSame(): void,
      toChangeInState(expectedChanges: any): void
    };
    execute(action: Redux.Action): any;
  }
  declare export interface ThunkTestkit {
    execute(...args: any[]): any;
  }
  declare export function Reducer(
    action: Redux.Reducer
  ): ReducerTestkit & {
    withState(state: any): ReducerTestkit
  };

  declare export function Selector(
    selector: (state: any, action: any) => any
  ): {
    expect(
      state: any,
      ...args: any[]
    ): {
      toReturn(expected: any): void
    },
    execute(state: any, ...args: any[]): any
  };

  declare export function Thunk(
    thunkFunc: ThunkAction<any, any, any, any>,
    extraArg?: any
  ): ThunkTestkit & {
    withState(state: any): ThunkTestkit
  };

  declare var npm$namespace$FlushThunks: {
    createMiddleware: typeof FlushThunks$createMiddleware
  };
  declare function FlushThunks$createMiddleware(): Redux.Middleware & {
    flush(): void,
    reset(): void
  };
}
