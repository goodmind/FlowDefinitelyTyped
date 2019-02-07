declare module "redux-logger" {
  import typeof * as Redux from "redux";

  declare export var logger: Redux.Middleware;
  declare export type LoggerPredicate = (
    getState: () => any,
    action: any,
    logEntry?: LogEntryObject
  ) => boolean;
  declare export type StateToString = (state: any) => string;
  declare export type ActionToString = (action: any) => string;
  declare export type ErrorToString = (error: any, prevState: any) => string;
  declare export interface ColorsObject {
    title?: boolean | ActionToString;
    prevState?: boolean | StateToString;
    action?: boolean | ActionToString;
    nextState?: boolean | StateToString;
    error?: boolean | ErrorToString;
  }
  declare export interface LevelObject {
    prevState?: string | boolean | StateToString;
    action?: string | boolean | ActionToString;
    nextState?: string | boolean | StateToString;
    error?: string | boolean | ErrorToString;
  }
  declare export interface LogEntryObject {
    action?: string | boolean | ActionToString;
    started?: number;
    startedTime?: Date;
    took?: number;
    error?: (error: any) => any;
    nextState?: (state: any) => any;
    prevState?: (state: any) => any;
  }
  declare export interface ReduxLoggerOptions {
    level?: string | ActionToString | LevelObject;
    duration?: boolean;
    timestamp?: boolean;
    colors?: ColorsObject | false;
    titleFormatter?: (
      formattedAction: any,
      formattedTime: string,
      took: number
    ) => string;
    logger?: any;
    logErrors?: boolean;
    collapsed?: boolean | LoggerPredicate;
    predicate?: LoggerPredicate;
    diff?: boolean;
    diffPredicate?: LoggerPredicate;
    stateTransformer?: (state: any) => any;
    actionTransformer?: (action: any) => any;
    errorTransformer?: (error: any) => any;
  }
  declare export function createLogger(
    options?: ReduxLoggerOptions
  ): Redux.Middleware;

  declare export default typeof logger;
}
