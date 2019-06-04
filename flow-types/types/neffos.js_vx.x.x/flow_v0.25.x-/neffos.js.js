declare module "neffos.js" {
  declare export type WSData = string;
  declare export var OnNamespaceConnect: any; // "_OnNamespaceConnect";
  declare export var OnNamespaceConnected: any; // "_OnNamespaceConnected";
  declare export var OnNamespaceDisconnect: any; // "_OnNamespaceDisconnect";
  declare export var OnRoomJoin: any; // "_OnRoomJoin";
  declare export var OnRoomJoined: any; // "_OnRoomJoined";
  declare export var OnRoomLeave: any; // "_OnRoomLeave";
  declare export var OnRoomLeft: any; // "_OnRoomLeft";
  declare export var OnAnyEvent: any; // "_OnAnyEvent";
  declare export var OnNativeMessage: any; // "_OnNativeMessage";
  declare export function isSystemEvent(event: string): boolean;

  declare export class Message {
    Namespace: string;
    Room: string;
    Event: string;
    Body: WSData;
    Err: string;
    IsForced: boolean;
    IsLocal: boolean;
    IsNative: boolean;
  }
  declare export class Room {
    nsConn: NSConn;
    name: string;
    constructor(ns: NSConn, roomName: string): this;
    emit(event: string, body: WSData): boolean;
    leave(): Promise<Error>;
  }
  declare export class NSConn {
    conn: Conn;
    namespace: string;
    events: Events;
    rooms: Map<string, Room>;
    constructor(conn: Conn, namespace: string, events: Events): this;
    emit(event: string, body: WSData): boolean;
    ask(event: string, body: WSData): Promise<Message>;
    joinRoom(roomName: string): Promise<Room>;
    room(roomName: string): Room;
    leaveAll(): Promise<Error>;
    disconnect(): Promise<Error>;
  }
  declare export type MessageHandlerFunc = (c: NSConn, msg: Message) => Error;
  declare export interface Events {
    [key: string]: MessageHandlerFunc;
  }
  declare export interface Namespaces {
    [key: string]: Events;
  }
  declare export function dial(
    endpoint: string,
    connHandler: Namespaces,
    protocols?: string[]
  ): Promise<Conn>;

  declare export var ErrInvalidPayload: Error;
  declare export var ErrBadNamespace: Error;
  declare export var ErrBadRoom: Error;
  declare export var ErrClosed: Error;
  declare export var ErrWrite: Error;
  declare export class Conn {
    ID: string;
    constructor(conn: any, connHandler: Namespaces, protocols?: string[]): this;
    connect(namespace: string): Promise<NSConn>;
    namespace(namespace: string): NSConn;
    ask(msg: Message): Promise<Message>;
    isClosed(): boolean;
    write(msg: Message): boolean;
    close(): void;
  }
}
