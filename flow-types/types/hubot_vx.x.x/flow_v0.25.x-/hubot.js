declare module "hubot" {
  declare class Hubot$Brain {
    userForId(id: any): any;
    userForName(name: string): any;
  }

  declare class Hubot$User {
    id: any;
    name: string;
  }

  declare class Hubot$Message {
    user: Hubot$User;
    text: string;
    id: string;
  }

  declare class Hubot$Response<R> {
    match: RegExpMatchArray;
    message: Hubot$Message;
    constructor(
      robot: R,
      message: Hubot$Message,
      match: RegExpMatchArray
    ): this;
    send(...strings: string[]): void;
    reply(...strings: string[]): void;
    random<T>(items: T[]): T;
  }

  declare type Hubot$ListenerCallback<R> = (
    response: Hubot$Response<R>
  ) => void;

  declare class Hubot$Robot<A> {
    alias: string;
    brain: Hubot$Brain;
    name: string;
    adapter: A;
    constructor(
      adapterPath: string,
      adapter: string,
      httpd: boolean,
      name: string,
      alias?: string
    ): this;
    hear(regex: RegExp, callback: Hubot$ListenerCallback<this>): void;
    hear(
      regex: RegExp,
      options: any,
      callback: Hubot$ListenerCallback<this>
    ): void;
    helpCommands(): string[];
    loadFile(directory: string, fileName: string): void;
    respond(regex: RegExp, callback: Hubot$ListenerCallback<this>): void;
    respond(
      regex: RegExp,
      options: any,
      callback: Hubot$ListenerCallback<this>
    ): void;
  }
  declare module.exports: typeof Hubot;
}
