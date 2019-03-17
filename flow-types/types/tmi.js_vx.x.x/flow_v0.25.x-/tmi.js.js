declare module "tmi.js" {
  import type { StrictEventEmitter } from "./strict-event-emitter-types";

  declare export interface Actions {
    action(channel: string, message: string): Promise<[string]>;
    ban(
      channel: string,
      username: string,
      reason?: string
    ): Promise<[string, string, string]>;
    clear(channel: string): Promise<[string]>;
    color(color: string): Promise<[string]>;
    commercial(channel: string, seconds: number): Promise<[string, number]>;
    connect(): Promise<[string, number]>;
    deletemessage(channel: string, messageUUID: string): Promise<[string]>;
    disconnect(): Promise<[string, number]>;
    emoteonly(channel: string): Promise<[string]>;
    emoteonlyoff(channel: string): Promise<[string]>;
    followersonly(channel: string, length?: number): Promise<[string, number]>;
    followersonlyoff(channel: string): Promise<[string]>;
    host(channel: string, target: string): Promise<[string, string]>;
    join(channel: string): Promise<[string]>;
    mod(channel: string, username: string): Promise<[string, string]>;
    mods(channel: string): Promise<string[]>;
    part(channel: string): Promise<[string]>;
    ping(): Promise<[number]>;
    r9kbeta(channel: string): Promise<[string]>;
    r9kbetaoff(channel: string): Promise<[string]>;
    raw(message: string): Promise<[string]>;
    say(channel: string, message: string): Promise<[string]>;
    slow(channel: string, length?: number): Promise<[string]>;
    slowoff(channel: string): Promise<[string]>;
    subscribers(channel: string): Promise<[string]>;
    subscribersoff(channel: string): Promise<[string]>;
    timeout(
      channel: string,
      username: string,
      length?: number,
      reason?: string
    ): Promise<[string, string, number, string]>;
    unban(channel: string, username: string): Promise<[string, string]>;
    unhost(channel: string): Promise<[string]>;
    unmod(channel: string, username: string): Promise<[string, string]>;
    unvip(channel: string, username: string): Promise<[string, string]>;
    vip(channel: string, username: string): Promise<[string, string]>;
    vips(channel: string): Promise<string[]>;
    whisper(username: string, message: string): Promise<[string, string]>;
  }
  declare export interface Events {
    action(
      channel: string,
      userstate: ChatUserstate,
      message: string,
      self: boolean
    ): void;
    anongiftpaidupgrade(
      channel: string,
      username: string,
      userstate: AnonSubGiftUpgradeUserstate
    ): void;
    ban(channel: string, username: string, reason: string): void;
    chat(
      channel: string,
      userstate: ChatUserstate,
      message: string,
      self: boolean
    ): void;
    cheer(channel: string, userstate: ChatUserstate, message: string): void;
    clearchat(channel: string): void;
    connected(address: string, port: number): void;
    connecting(address: string, port: number): void;
    disconnected(reason: string): void;
    emoteonly(channel: string, enabled: boolean): void;
    emotesets(sets: string, obj: EmoteObj): void;
    followersonly(channel: string, enabled: boolean, length: number): void;
    giftpaidupgrade(
      channel: string,
      username: string,
      sender: string,
      userstate: SubGiftUpgradeUserstate
    ): void;
    hosted(
      channel: string,
      username: string,
      viewers: number,
      autohost: boolean
    ): void;
    hosting(channel: string, target: string, viewers: number): void;
    join(channel: string, username: string, self: boolean): void;
    logon(): void;
    message(
      channel: string,
      userstate: ChatUserstate,
      message: string,
      self: boolean
    ): void;
    messagedeleted(
      channel: string,
      username: string,
      deletedMessage: string,
      userstate: DeleteUserstate
    ): void;
    mod(channel: string, username: string): void;
    mods(channel: string, mods: string[]): void;
    notice(channel: string, msgid: MsgID, message: string): void;
    part(channel: string, username: string, self: boolean): void;
    ping(): void;
    pong(latency: number): void;
    r9kbeta(channel: string, enabled: boolean): void;
    raided(channel: string, username: string, viewers: number): void;
    raw_message: (
      messageCloned: {
        [property: string]: any
      },
      message: {
        [property: string]: any
      }
    ) => void;
    reconnect(): void;
    resub(
      channel: string,
      username: string,
      months: number,
      message: string,
      userstate: SubUserstate,
      methods: SubMethods
    ): void;
    roomstate(channel: string, state: RoomState): void;
    serverchange(channel: string): void;
    slowmode(channel: string, enabled: boolean, length: number): void;
    subgift(
      channel: string,
      username: string,
      streakMonths: number,
      recipient: string,
      methods: SubMethods,
      userstate: SubGiftUserstate
    ): void;
    submysterygift(
      channel: string,
      username: string,
      numbOfSubs: number,
      methods: SubMethods,
      userstate: SubMysteryGiftUserstate
    ): void;
    subscribers(channel: string, enabled: boolean): void;
    subscription(
      channel: string,
      username: string,
      methods: SubMethods,
      message: string,
      userstate: SubUserstate
    ): void;
    timeout(
      channel: string,
      username: string,
      reason: string,
      duration: number
    ): void;
    unhost(channel: string, viewers: number): void;
    unmod(channel: string, username: string): void;
    vips(channel: string, vips: string[]): void;
    whisper(
      from: string,
      userstate: ChatUserstate,
      message: string,
      self: boolean
    ): void;
  }
  declare export interface ClientBase {
    getChannels(): string[];
    getOptions(): Options;
    getUsername(): string;
    isMod(channel: string, username: string): boolean;
    readyState(): "CONNECTING" | "OPEN" | "CLOSING" | "CLOSED";
    on(event: any, listener: any): Client;
    addListener(event: any, listener: any): Client;
    removeListener(event: any, listener: any): Client;
    removeAllListeners(event?: $Keys<Events>): Client;
    setMaxListeners(n: number): Client;
    emits(events: Array<$Keys<Events>>, values: any[][]): void;
    emit: (event: any) => boolean;
    once(event: any, listener: any): Client;
    listenerCount(event: $Keys<Events>): number;
  }
  declare export interface Badges {
    admin?: string;
    bits?: string;
    broadcaster?: string;
    global_mod?: string;
    moderator?: string;
    subscriber?: string;
    staff?: string;
    turbo?: string;
    premium?: string;
  }
  declare export interface SubMethods {
    prime?: boolean;
    plan?: SubMethod;
    planName?: string;
  }
  declare export interface DeleteUserstate {
    login?: string;
    message?: string;
    "target-msg-id"?: string;
  }
  declare export interface CommonUserstate {
    badges?: Badges;
    color?: string;
    "display-name"?: string;
    emotes?: {
      [emoteid: string]: string[]
    };
    id?: string;
    mod?: boolean;
    turbo?: boolean;
    "emotes-raw"?: string;
    "badges-raw"?: string;
    "room-id"?: string;
    subscriber?: boolean;
    "user-type"?: "" | "mod" | "global_mod" | "admin" | "staff";
    "user-id"?: string;
    "tmi-sent-ts"?: string;
    flags?: string;
    [paramater: string]: any;
  }
  declare export type UserNoticeState = {
    login?: string,
    message?: string,
    "system-msg"?: string
  } & CommonUserstate;

  declare export type CommonSubUserstate = {
    "msg-param-sub-plan"?: SubMethod,
    "msg-param-sub-plan-name"?: string
  } & UserNoticeState;

  declare export type CommonGiftSubUserstate = {
    "msg-param-recipient-display-name"?: string,
    "msg-param-recipient-id"?: string,
    "msg-param-recipient-user-name"?: string,
    "msg-param-months"?: boolean | string
  } & CommonSubUserstate;

  declare export type ChatUserstate = {
    "message-type"?: "chat" | "action" | "whisper",
    username?: string,
    bits?: string
  } & CommonUserstate;

  declare export type SubUserstate = {
    "message-type"?: "sub" | "resub",
    "msg-param-cumulative-months"?: string | boolean,
    "msg-param-should-share-streak"?: boolean,
    "msg-param-streak-months"?: string | boolean
  } & CommonSubUserstate;

  declare export type SubMysteryGiftUserstate = {
    "message-type"?: "submysterygift",
    "msg-param-sender-count"?: string | boolean
  } & CommonSubUserstate;

  declare export type SubGiftUserstate = {
    "message-type"?: "subgift",
    "msg-param-sender-count"?: string | boolean
  } & CommonGiftSubUserstate;

  declare export type AnonSubGiftUserstate = {
    "message-type"?: "anonsubgift"
  } & CommonGiftSubUserstate;

  declare export type SubGiftUpgradeUserstate = {
    "message-type"?: "giftpaidupgrade",
    "msg-param-sender-name"?: string,
    "msg-param-sender-login"?: string
  } & CommonSubUserstate;

  declare export type AnonSubGiftUpgradeUserstate = {
    "message-type"?: "anongiftpaidupgrade"
  } & CommonSubUserstate;

  declare export type RaidUserstate = {
    "message-type"?: "raid",
    "msg-param-displayName"?: string,
    "msg-param-login"?: string,
    "msg-param-viewerCount"?: string
  } & UserNoticeState;

  declare export type RitualUserstate = {
    "message-type"?: "ritual",
    "msg-param-ritual-name"?: "new_chatter"
  } & UserNoticeState;

  declare export type Userstate =
    | ChatUserstate
    | SubUserstate
    | SubGiftUserstate
    | SubGiftUpgradeUserstate
    | AnonSubGiftUserstate
    | SubMysteryGiftUserstate
    | AnonSubGiftUpgradeUserstate
    | RaidUserstate
    | RitualUserstate;
  declare export interface EmoteObj {
    [id: string]: [
      {
        code: string,
        id: number
      }
    ];
  }
  declare export type MsgID =
    | "already_banned"
    | "already_emote_only_on"
    | "already_emote_only_off"
    | "already_subs_on"
    | "already_subs_off"
    | "bad_ban_admin"
    | "bad_ban_broadcaster"
    | "bad_ban_global_mod"
    | "bad_ban_self"
    | "bad_ban_staff"
    | "bad_commercial_error"
    | "bad_host_hosting"
    | "bad_host_rate_exceeded"
    | "bad_mod_mod"
    | "bad_mod_banned"
    | "bad_timeout_admin"
    | "bad_timeout_global_mod"
    | "bad_timeout_self"
    | "bad_timeout_staff"
    | "bad_unban_no_ban"
    | "bad_unmod_mod"
    | "ban_success"
    | "cmds_available"
    | "color_changed"
    | "commercial_success"
    | "emote_only_on"
    | "emote_only_off"
    | "hosts_remaining"
    | "host_target_went_offline"
    | "mod_success"
    | "msg_banned"
    | "msg_censored_broadcaster"
    | "msg_channel_suspended"
    | "msg_duplicate"
    | "msg_emoteonly"
    | "msg_ratelimit"
    | "msg_subsonly"
    | "msg_timedout"
    | "msg_verified_email"
    | "no_help"
    | "no_permission"
    | "not_hosting"
    | "timeout_success"
    | "unban_success"
    | "unmod_success"
    | "unrecognized_cmd"
    | "usage_ban"
    | "usage_clear"
    | "usage_color"
    | "usage_commercial"
    | "usage_disconnect"
    | "usage_emote_only_on"
    | "usage_emote_only_off"
    | "usage_help"
    | "usage_host"
    | "usage_me"
    | "usage_mod"
    | "usage_mods"
    | "usage_r9k_on"
    | "usage_r9k_off"
    | "usage_slow_on"
    | "usage_slow_off"
    | "usage_subs_on"
    | "usage_subs_off"
    | "usage_timeout"
    | "usage_unban"
    | "usage_unhost"
    | "usage_unmod"
    | "whisper_invalid_self"
    | "whisper_limit_per_min"
    | "whisper_limit_per_sec"
    | "whisper_restricted_recipient";
  declare export type SubMethod = "Prime" | "1000" | "2000" | "3000";
  declare export interface RoomState {
    "broadcaster-lang"?: string;
    "emote-only"?: boolean;
    "followers-only"?: string | boolean;
    r9k?: boolean;
    rituals?: boolean;
    "room-id"?: string;
    slow?: string | boolean;
    "subs-only"?: boolean;
    channel?: string;
  }
  declare export type Client = StrictEventEmitter<ClientBase, Events> & Actions;
  declare export interface Options {
    options?: {
      clientId?: string,
      debug?: boolean
    };
    connection?: {
      server?: string,
      port?: number,
      reconnect?: boolean,
      maxReconnectAttempts?: number,
      maxReconnectInverval?: number,
      reconnectDecay?: number,
      reconnectInterval?: number,
      secure?: boolean,
      timeout?: number
    };
    identity?: {
      username?: string,
      password?: string
    };
    channels?: string[];
    logger?: {
      info?: (message: string) => any,
      warn?: (message: string) => any,
      error?: (message: string) => any
    };
  }
  declare export function client(opts: Options): Client;

  declare export function Client(opts: Options): Client;
}
