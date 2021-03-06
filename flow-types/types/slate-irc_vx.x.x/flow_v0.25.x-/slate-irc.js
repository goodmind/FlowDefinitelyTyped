declare module "slate-irc" {
  import typeof * as net from "net";

  declare function IRC(socket: net.Socket): IRC$IRC$Client;

  declare interface IRC$DataEvent {
    prefix: string;
    command: string;
    params: string;
    trailing: string;
    string: string;
  }

  declare interface IRC$MOTDEvent {
    motd: string[];
  }

  declare interface IRC$TopicEvent {
    nick: string;
    hostmask: string;
    channel: string;
    topic: string;
  }

  declare interface IRC$MessageEvent {
    from: string;
    hostmask: string;
    to: string;
    message: string;
  }

  declare interface IRC$JoinEvent {
    nick: string;
    hostmask: string;
    channel: string;
  }

  declare interface IRC$PartEvent {
    nick: string;
    hostmask: string;
    channels: string[];
  }

  declare interface IRC$NickEvent {
    nick: string;
    hostmask: string;
    new: string;
  }

  declare interface IRC$ModeEvent {
    nick: string;
    target: string;
    mode: string;
    client: string;
  }

  declare interface IRC$AwayEvent {
    nick: string;
    message: string;
  }

  declare interface IRC$QuitEvent {
    nick: string;
    hostmask: string;
    message: string;
  }

  declare class IRC$Client {
    me: string;
    write(str: string): void;
    pass(pass: string): void;
    nick(nick: string): void;
    user(username: string, realname: string): void;
    invite(name: string, channel: string): void;
    send(target: string, msg: string): void;
    action(target: string, msg: string): void;
    notice(target: string, msg: string): void;
    ctcp(target: string, msg: string): void;
    join(channel: string, key?: string): void;
    part(channel: string, msg?: string): void;
    names(
      channel: string,
      callback: (
        error: Error,
        names: {
          name: string,
          mode: string
        }[]
      ) => void
    ): void;
    away(message: string): void;
    topic(channel: string, topic: string): void;
    kick(
      channels: string | string[],
      nicks: string | string[],
      msg: string
    ): void;
    oper(name: string, password: string): void;
    mode(target: string, flags: string, params: string): void;
    quit(msg: string): void;
    whois(target: string, mask: string, callback: Function): void;
    on(event: string, callback: Function): void;
    on(event: "data", callback: (event: IRC$DataEvent) => void): void;
    on(event: "welcome", callback: (name: string) => void): void;
    on(event: "message", callback: (event: IRC$MessageEvent) => void): void;
    on(event: "notice", callback: (event: IRC$MessageEvent) => void): void;
    on(event: "motd", callback: (event: IRC$MOTDEvent) => void): void;
    on(event: "topic", callback: (event: IRC$TopicEvent) => void): void;
    on(event: "join", callback: (event: IRC$JoinEvent) => void): void;
    on(event: "part", callback: (event: IRC$PartEvent) => void): void;
    on(event: "nick", callback: (event: IRC$NickEvent) => void): void;
    on(event: "mode", callback: (event: IRC$ModeEvent) => void): void;
    on(event: "away", callback: (event: IRC$AwayEvent) => void): void;
    on(event: "quit", callback: (event: IRC$QuitEvent) => void): void;
  }
  declare module.exports: typeof IRC;
}
