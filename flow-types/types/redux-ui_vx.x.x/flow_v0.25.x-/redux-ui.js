declare module "redux-ui" {
  import typeof * as Redux from "redux";

  declare export interface uiParams<UIStateShape> {
    key?: string;
    persist?: boolean;
    state: UIStateShape;
    mergeProps?: (stateProps: any, dispatchProps: any, ownProps: any) => any;
    options?: {
      pure?: boolean,
      withRef?: boolean
    };
  }
  declare export interface ReduxUIProps<UIStateShape> {
    uiKey: string;
    ui: UIStateShape;
    updateUI(obj: UIStateShape): void;
    updateUI(key: string, value: any): void;
    resetUI(): void;
  }
  declare export var reducer: Redux.Reducer<any>;
  declare export default function ui<UIStateShape>(
    params?: uiParams<UIStateShape>
  ): <T>(component: T) => T;
}
