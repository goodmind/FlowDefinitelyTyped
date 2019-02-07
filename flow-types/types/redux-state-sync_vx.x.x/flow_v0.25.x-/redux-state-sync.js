declare module "redux-state-sync" {
  import type { Store, Reducer, Middleware, AnyAction } from "redux";

  import typeof BroadcastChannel from "broadcast-channel";

  declare export interface Stamp {
    $uuid: string;
    $wuid: string;
  }
  declare export type StampedAction = Stamp & AnyAction;
  declare export interface Config {
    channel?: string;
    predicate?: (type?: string) => boolean | null;
    blacklist?: string[];
    whitelist?: string[];
    broadcastChannelOption?: { [key: string]: any } | null;
  }
  declare export interface MessageListenerConfig {
    channel: BroadcastChannel;
    dispatch: (action: AnyAction | StampedAction) => void;
    allowed: (type?: string) => boolean;
  }
  declare export function generateUuidForAction(
    action: AnyAction
  ): StampedAction;

  declare export function isActionAllowed(
    config: Config
  ): (type: string) => boolean;

  declare export function createMessageListener(
    config: MessageListenerConfig
  ): void;

  declare export function createStateSyncMiddleware(
    config?: Config
  ): Middleware;

  declare export function withReduxStateSync(
    appReducer: Reducer
  ): (state: any, action: AnyAction) => Reducer;

  declare export function initStateWithPrevTab(store: Store): Store;
}
