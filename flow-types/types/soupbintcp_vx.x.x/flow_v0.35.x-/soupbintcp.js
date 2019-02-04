declare module 'soupbintcp' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          Socket
        } from 'net';

	declare export class Client mixins EventEmitter {
constructor(options: {
port: number,
host: string
}, callback?: () => void): this;
login(payload: LoginRequestPayload, callback?: (data?: any) => void): void;
logout(callback?: (data?: any) => void): void;
send(payload: any, callback?: (data?: any) => void): void;
end(): void
}
	declare export interface ConnectionOptions {
rxTimeoutMillis?: number,
txIntervalMillis?: number,
heartbeatPacketType: PacketType,
keepAliveMillis?: number
} 
	declare export class Connection mixins EventEmitter {
constructor(socket: Socket, options: ConnectionOptions): this;
send(packetType: PacketType, payload: any, callback?: (data?: any) => void): void;
end(): void
}
	declare export  class PacketType {
  constructor(...args: empty): mixed;
static +DEBUG: Class<PacketType__DEBUG> & PacketType__DEBUG & 43;// 43
static +LOGIN_ACCEPTED: Class<PacketType__LOGIN_ACCEPTED> & PacketType__LOGIN_ACCEPTED & 65;// 65
static +LOGIN_REJECTED: Class<PacketType__LOGIN_REJECTED> & PacketType__LOGIN_REJECTED & 74;// 74
static +SEQUENCED_DATA: Class<PacketType__SEQUENCED_DATA> & PacketType__SEQUENCED_DATA & 83;// 83
static +SERVER_HEARTBEAT: Class<PacketType__SERVER_HEARTBEAT> & PacketType__SERVER_HEARTBEAT & 72;// 72
static +END_OF_SESSION: Class<PacketType__END_OF_SESSION> & PacketType__END_OF_SESSION & 90;// 90
static +LOGIN_REQUEST: Class<PacketType__LOGIN_REQUEST> & PacketType__LOGIN_REQUEST & 76;// 76
static +UNSEQUENCED_DATA: Class<PacketType__UNSEQUENCED_DATA> & PacketType__UNSEQUENCED_DATA & 85;// 85
static +CLIENT_HEARTBEAT: Class<PacketType__CLIENT_HEARTBEAT> & PacketType__CLIENT_HEARTBEAT & 82;// 82
static +LOGOUT_REQUEST: Class<PacketType__LOGOUT_REQUEST> & PacketType__LOGOUT_REQUEST & 79;// 79

}

declare class PacketType__DEBUG mixins PacketType {}
declare class PacketType__LOGIN_ACCEPTED mixins PacketType {}
declare class PacketType__LOGIN_REJECTED mixins PacketType {}
declare class PacketType__SEQUENCED_DATA mixins PacketType {}
declare class PacketType__SERVER_HEARTBEAT mixins PacketType {}
declare class PacketType__END_OF_SESSION mixins PacketType {}
declare class PacketType__LOGIN_REQUEST mixins PacketType {}
declare class PacketType__UNSEQUENCED_DATA mixins PacketType {}
declare class PacketType__CLIENT_HEARTBEAT mixins PacketType {}
declare class PacketType__LOGOUT_REQUEST mixins PacketType {}

	declare export interface LoginRequestPayload {
username: string,
password: string,
requestedSession: string,
requestedSequenceNumber: number
} 
	declare export function formatLoginRequest(payload: LoginRequestPayload): Buffer

	declare export function parseLoginRequest(payload: Buffer): LoginRequestPayload

	declare export interface LoginAcceptedPayload {
username: string,
sequenceNumber: number
} 
	declare export function formatLoginAccepted(payload: LoginAcceptedPayload): Buffer

	declare export function parseLoginAccepted(payload: Buffer): LoginAcceptedPayload

	declare export interface LoginRejectedPayload {
rejectReasonCode: string
} 
	declare export function formatLoginRejected(payload: LoginRejectedPayload): Buffer

	declare export function parseLoginRejected(payload: Buffer): LoginRejectedPayload

	declare export class Parser  {
constructor(callback: (packetType: PacketType, payload: Buffer) => void): this;
parse(data: Buffer): void
}
	declare export class Server mixins EventEmitter {
constructor(options: {
port: number,
host: string
}, callback?: (data?: any) => void): this;
address(): {
port: number,
family: string,
address: string
};
close(callback: () => void): void
}
	declare export class Session mixins EventEmitter {
constructor(socket: Socket): this;
accept(payload: LoginAcceptedPayload, callback?: (data?: any) => void): void;
reject(payload: LoginRejectedPayload, callback?: (data?: any) => void): void;
send(payload: any, callback?: (data?: any) => void): void;
ending(callback?: (data?: any) => void): void;
end(): void
}
    }
