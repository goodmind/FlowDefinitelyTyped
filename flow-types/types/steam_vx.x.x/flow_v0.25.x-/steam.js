declare module "steam" {
  declare export default typeof Steam;

  declare var npm$namespace$Steam: {
    servers: typeof Steam$servers,
    EResult: typeof Steam$EResult,
    EPersonaState: typeof Steam$EPersonaState,
    EChatEntryType: typeof Steam$EChatEntryType,
    EChatMemberStateChange: typeof Steam$EChatMemberStateChange,
    SteamClient: typeof Steam$SteamClient
  };
  declare export var Steam$servers: any;

  declare export interface Steam$LogonOptions {
    accountName: string;
    password: string;
    shaSentryfile?: string;
    authCode?: string;
  }

  declare export var Steam$EResult: {|
    +AccountLogonDenied: 0 // 0
  |};

  declare export var Steam$EPersonaState: {|
    +Online: 0 // 0
  |};

  declare export var Steam$EChatEntryType: {|
    +ChatMsg: 0 // 0
  |};

  declare export var Steam$EChatMemberStateChange: {|
    +Kicked: 0 // 0
  |};

  declare export class Steam$SteamClient mixins NodeJS.EventEmitter {
    sessionId: string;
    cookie: string[];
    steamID: string;
    users: {};
    logOn(options: Steam$LogonOptions): void;
    webLogOn(callback: (cookie: any[]) => void): void;
    joinChat(chatId: string): void;
    sendMessage(
      source: any,
      message: string,
      entryType: $Values<typeof Steam$EChatEntryType>
    ): void;
    setPersonaState(state: $Values<typeof Steam$EPersonaState>): void;
    setPersonaName(name: string): void;
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
  }
}
