declare module "multireducer" {
  declare export interface MetaObject {
    [key: string]: string;
  }
  declare export interface ActionObject {
    meta: MetaObject;
    [rest: string]: any;
  }
  declare export function bindActionCreators(
    actions: any,
    dispatch: any,
    reducerKey: string
  ): any;

  declare export function wrapDispatch(dispatch: any, reducerKey: string): any;

  declare export function wrapAction(
    action: any,
    reducerKey: string
  ): ActionObject;

  declare export default function multireducer(
    reducers: {
      [key: string]: any
    },
    reducerKey?: string
  ): (state: any, action: any) => any;
}
