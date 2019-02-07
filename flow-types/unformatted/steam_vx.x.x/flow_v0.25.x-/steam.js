declare module 'steam' {
        declare module.exports: typeof Steam

	
      declare var npm$namespace$Steam: {
        
        servers: typeof Steam$servers,
      }
declare export var Steam$servers: any;

declare export interface Steam$LogonOptions {
accountName: string,
password: string,
shaSentryfile?: string,
authCode?: string
} 

declare export  class Steam$EResult {
  constructor(...args: empty): mixed;
static +AccountLogonDenied: Class<Steam$EResult__AccountLogonDenied> & Steam$EResult__AccountLogonDenied & 0;// 0

}

declare class Steam$EResult__AccountLogonDenied mixins Steam$EResult {}


declare export  class Steam$EPersonaState {
  constructor(...args: empty): mixed;
static +Online: Class<Steam$EPersonaState__Online> & Steam$EPersonaState__Online & 0;// 0

}

declare class Steam$EPersonaState__Online mixins Steam$EPersonaState {}


declare export  class Steam$EChatEntryType {
  constructor(...args: empty): mixed;
static +ChatMsg: Class<Steam$EChatEntryType__ChatMsg> & Steam$EChatEntryType__ChatMsg & 0;// 0

}

declare class Steam$EChatEntryType__ChatMsg mixins Steam$EChatEntryType {}


declare export  class Steam$EChatMemberStateChange {
  constructor(...args: empty): mixed;
static +Kicked: Class<Steam$EChatMemberStateChange__Kicked> & Steam$EChatMemberStateChange__Kicked & 0;// 0

}

declare class Steam$EChatMemberStateChange__Kicked mixins Steam$EChatMemberStateChange {}


declare export class Steam$SteamClient mixins NodeJS.EventEmitter {
sessionId: string;
cookie: string[];
steamID: string;
users: {};
logOn(options: Steam$LogonOptions): void;
webLogOn(callback: (cookie: any[]) => void): void;
joinChat(chatId: string): void;
sendMessage(source: any, message: string, entryType: Steam$EChatEntryType): void;
setPersonaState(state: Steam$EPersonaState): void;
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
listenerCount(type: string): number
}
    }
