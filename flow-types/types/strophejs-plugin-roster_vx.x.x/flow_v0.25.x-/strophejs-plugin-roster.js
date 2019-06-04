declare module "strophe.js" {
  declare interface Strophe$Connection {
    roster: StropheRosterPlugin;
  }
}
declare module "strophejs-plugin-roster" {
  import type { Strophe } from "strophe.js";

  declare export {};

  declare export type IqCallback = (stanza: Element) => any;
  declare export type IqID = string;
  declare export type RosterSubscriptionState =
    | "none"
    | "to"
    | "from"
    | "both"
    | "remove";
  declare export type PresenceSubscriptionType =
    | "subscribe"
    | "unsubscribe"
    | "subscribed"
    | "unsubscribed";
  declare export interface RosterResource {
    priority: string;
    show: string;
    status: string;
  }
  declare export interface RosterItem {
    name: string;
    jid: string;
    subscription: RosterSubscriptionState;
    ask: string;
    groups: string[];
    resources: {
      [resourceId: string]: RosterResource
    };
  }
  declare export type RosterUpdateCallback = (
    items: RosterItem[],
    item: RosterItem,
    previousItem: RosterItem
  ) => any;
  declare export type PresenceRequestCallback = (from: string) => any;
  declare interface StropheRosterPlugin {
    supportVersioning(): boolean;
    get(userCallback: IqCallback, ver?: string, items?: string[]): IqID;
    registerCallback(callback: RosterUpdateCallback): void;
    registerRequestCallback(callback: PresenceRequestCallback): void;
    findItem(jid: string): RosterItem | false;
    removeItem(jid: string): boolean;
    subscribe(jid: string, message?: string, nick?: string): void;
    unsubscribe(jid: string, message?: string): void;
    authorize(jid: string, message?: string): void;
    unauthorize(jid: string, message?: string): void;
    add(
      jid: string,
      name: string,
      groups: string[],
      call_back?: IqCallback
    ): IqID;
    update(
      jid: string,
      name?: string,
      groups?: string[],
      call_back?: IqCallback
    ): IqID;
    remove(jid: string, call_back?: IqCallback): void;
  }
}
