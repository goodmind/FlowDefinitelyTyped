declare module "backbone" {
  declare interface Radio {
    Radio$tuneIn(channelName: string): Radio;
    Radio$tuneOut(channelName: string): Radio;
    Radio$log(channelName: string, eventName: string, ...args: any[]): void;
    Radio$channel(channelName: string): Radio$Radio$Channel;
  }

  declare var npm$namespace$Radio: {
    log: typeof Radio$log,
    tuneIn: typeof Radio$tuneIn,
    tuneOut: typeof Radio$tuneOut,
    channel: typeof Radio$channel,
    command: typeof Radio$command,
    comply: typeof Radio$comply,
    complyOnce: typeof Radio$complyOnce,
    stopComplying: typeof Radio$stopComplying,
    request: typeof Radio$request,
    reply: typeof Radio$reply,
    replyOnce: typeof Radio$replyOnce,
    stopReplying: typeof Radio$stopReplying,
    on: typeof Radio$on,
    off: typeof Radio$off,
    trigger: typeof Radio$trigger,
    bind: typeof Radio$bind,
    unbind: typeof Radio$unbind,
    once: typeof Radio$once,
    listenTo: typeof Radio$listenTo,
    listenToOnce: typeof Radio$listenToOnce,
    stopListening: typeof Radio$stopListening,
    VERSION: typeof Radio$VERSION,
    DEBUG: typeof Radio$DEBUG
  };
  declare var Radio$VERSION: string;

  declare var Radio$DEBUG: boolean;

  declare function Radio$log(
    channelName: string,
    eventName: string,
    ...args: any[]
  ): void;

  declare function Radio$tuneIn(channelName: string): Radio;

  declare function Radio$tuneOut(channelName: string): Radio;

  declare function Radio$channel(channelName: string): Radio$Channel;

  declare function Radio$command(
    channelName: string,
    commandName: string,
    ...args: any[]
  ): void;

  declare function Radio$comply(
    channelName: string,
    commandName: string,
    callback: (...args: any[]) => void,
    context?: any
  ): Radio$Commands;

  declare function Radio$comply(
    channelName: string,
    commands: {
      [key: string]: (...args: any[]) => any
    },
    context?: any
  ): Radio$Commands;

  declare function Radio$complyOnce(
    channelName: string,
    commandName: string,
    callback: (...args: any[]) => void,
    context?: any
  ): Radio$Commands;

  declare function Radio$complyOnce(
    channelName: string,
    commands: {
      [key: string]: (...args: any[]) => any
    },
    context?: any
  ): Radio$Commands;

  declare function Radio$stopComplying(
    channelName: string,
    commandName?: string,
    callback?: (...args: any[]) => void,
    context?: any
  ): Radio$Commands;

  declare function Radio$request(
    channelName: string,
    requestName: string,
    ...args: any[]
  ): any;

  declare function Radio$reply(
    channelName: string,
    requestName: string,
    callback: (...args: any[]) => any,
    context?: any
  ): Radio$Requests;

  declare function Radio$reply(
    channelName: string,
    commands: {
      [key: string]: (...args: any[]) => any
    },
    context?: any
  ): Radio$Requests;

  declare function Radio$replyOnce(
    channelName: string,
    requestName: string,
    callback: (...args: any[]) => any,
    context?: any
  ): Radio$Requests;

  declare function Radio$replyOnce(
    channelName: string,
    commands: {
      [key: string]: (...args: any[]) => any
    },
    context?: any
  ): Radio$Requests;

  declare function Radio$stopReplying(
    channelName: string,
    commandName?: string,
    callback?: (...args: any[]) => any,
    context?: any
  ): Radio$Requests;

  declare function Radio$on(
    channelName: string,
    eventName: string,
    callback?: Function,
    context?: any
  ): any;

  declare function Radio$off(
    channelName: string,
    eventName?: string,
    callback?: Function,
    context?: any
  ): any;

  declare function Radio$trigger(
    channelName: string,
    eventName: string,
    ...args: any[]
  ): any;

  declare function Radio$bind(
    channelName: string,
    eventName: string,
    callback: Function,
    context?: any
  ): any;

  declare function Radio$unbind(
    channelName: string,
    eventName?: string,
    callback?: Function,
    context?: any
  ): any;

  declare function Radio$once(
    channelName: string,
    events: string,
    callback: Function,
    context?: any
  ): any;

  declare function Radio$listenTo(
    channelName: string,
    object: any,
    events: string,
    callback: Function
  ): any;

  declare function Radio$listenToOnce(
    channelName: string,
    object: any,
    events: string,
    callback: Function
  ): any;

  declare function Radio$stopListening(
    channelName: string,
    object?: any,
    events?: string,
    callback?: Function
  ): any;

  declare class Radio$Commands {
    command(commandName: string, ...args: any[]): void;
    comply(
      commandName: string,
      callback: (...args: any[]) => void,
      context?: any
    ): Radio$Commands;
    comply(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Commands;
    complyOnce(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Commands;
    complyOnce(
      commandName: string,
      callback: (...args: any[]) => void,
      context?: any
    ): Radio$Commands;
    stopComplying(
      commandName?: string,
      callback?: (...args: any[]) => void,
      context?: any
    ): Radio$Commands;
  }

  declare class Radio$Requests {
    request(requestName: string, ...args: any[]): any;
    reply(
      requestName: string,
      callback: (...args: any[]) => any,
      context?: any
    ): Radio$Requests;
    reply(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Requests;
    replyOnce(
      requestName: string,
      callback: (...args: any[]) => any,
      context?: any
    ): Radio$Requests;
    replyOnce(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Requests;
    stopReplying(
      commandName?: string,
      callback?: (...args: any[]) => any,
      context?: any
    ): Radio$Requests;
  }

  declare class Radio$Channel
    mixins Radio$Commands, Radio$Requests, Backbone.Events {
    on(
      eventName: string,
      callback?: (...args: any[]) => void,
      context?: any
    ): any;
    on(eventMap: EventsHash): any;
    on(eventName: any, callback?: any, context?: any): any;
    off(
      eventName?: string,
      callback?: (...args: any[]) => void,
      context?: any
    ): any;
    trigger(eventName: string, ...args: any[]): any;
    bind(
      eventName: string,
      callback: (...args: any[]) => void,
      context?: any
    ): any;
    unbind(
      eventName?: string,
      callback?: (...args: any[]) => void,
      context?: any
    ): any;
    once(
      events: string,
      callback: (...args: any[]) => void,
      context?: any
    ): any;
    listenTo(
      object: any,
      events: string,
      callback: (...args: any[]) => void
    ): any;
    listenToOnce(
      object: any,
      events: string,
      callback: (...args: any[]) => void
    ): any;
    stopListening(
      object?: any,
      events?: string,
      callback?: (...args: any[]) => void
    ): any;
    channelName: string;
    reset(): Radio$Channel;
    command(commandName: string, ...args: any[]): void;
    comply(
      commandName: string,
      callback: (...args: any[]) => void,
      context?: any
    ): Radio$Commands;
    comply(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Commands;
    complyOnce(
      commandName: string,
      callback: (...args: any[]) => void,
      context?: any
    ): Radio$Commands;
    complyOnce(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Commands;
    stopComplying(
      commandName?: string,
      callback?: (...args: any[]) => void,
      context?: any
    ): Radio$Commands;
    request(requestName: string, ...args: any[]): any;
    reply(
      requestName: string,
      callback: (...args: any[]) => any,
      context?: any
    ): Radio$Requests;
    reply(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Requests;
    replyOnce(
      requestName: string,
      callback: (...args: any[]) => any,
      context?: any
    ): Radio$Requests;
    replyOnce(
      commands: {
        [key: string]: (...args: any[]) => any
      },
      context?: any
    ): Radio$Requests;
    stopReplying(
      commandName?: string,
      callback?: (...args: any[]) => any,
      context?: any
    ): Radio$Requests;
  }
}
declare module "backbone.radio" {
  import typeof * as Backbone from "backbone";

  declare module.exports: typeof Backbone.Radio;
}
