declare module 'twilio-common' {
        import type {
          EventEmitter
        } from 'events';

	declare export class AccessManager mixins EventEmitter {
expires: Date;
identity: string;
isExpired: boolean;
token: string;
constructor(initialToken: string): this;
updateToken(newToken: string): Promise<AccessManager>;
on(type: "error", listener: (error: Error) => void): this;
on(
type: "tokenExpired" | "tokenWillExpire" | "tokenUpdated",
listener: (manager: AccessManager) => void): this
}
    }
