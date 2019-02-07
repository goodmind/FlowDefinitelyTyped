declare module "skyway" {
  declare interface Options {
    key: string;
    debug?: number;
    turn?: boolean;
    credential?: Credential;
    config?: RTCConfiguration;
  }
  declare interface Credential {
    timestamp?: number;
    ttl?: number;
    authToken?: string;
  }
  declare interface CallOptions {
    metadata?: any;
    videoBandWidth?: number;
    audioBandwidth?: number;
    videoCodec?: string;
    audioCodec?: string;
    videoReceiveEnabled?: boolean;
    audioReceiveEnabled?: boolean;
    label?: string;
  }
  declare interface ConnectOptions {
    metadata?: any;
    serialization?: string;
    dcInit?: RTCDataChannelInit;
    label?: string;
  }
  declare interface RoomOptions {
    mode?: string;
    stream?: MediaStream;
    videoBandwidth?: number;
    audioBandwidth?: number;
    videoCodec?: string;
    audioCodec?: string;
    videoReceiveEnabled?: boolean;
    audioReceiveEnabled?: boolean;
  }
  declare interface AnswerOptions {
    videoBandwidth?: number;
    audioBandwidth?: number;
    videoCodec?: string;
    audioCodec?: string;
  }
  declare class Peer {
    constructor(id: string, options: Options): this;
    constructor(options: Options): this;
    connections: any;
    id: string;
    open: boolean;
    rooms: any;
    call(
      peerId: string,
      stream?: MediaStream,
      options?: CallOptions
    ): MediaConnection | void;
    connect(peerId: string, options?: ConnectOptions): DataConnection | void;
    destroy(): void;
    disconnect(): void;
    joinRoom(
      roomName: string,
      roomOptions?: RoomOptions
    ): SFURoom | MeshRoom | void | null;
    listAllPeers(cb: (peerIds: Array<string>) => void): void;
    updateCredential(newCredential: Credential): void;
    on(event: string, cb: (ret: any) => void): void;
    on(event: "open", cb: (id: string) => void): void;
    on(event: "call", cb: (call: MediaConnection) => void): void;
    on(event: "close", cb: () => void): void;
    on(event: "connection", cb: (connection: DataConnection) => void): void;
    on(event: "disconnected", cb: (id: string) => void): void;
    on(event: "error", cb: (err: any) => void): void;
  }
  declare class MediaConnection {
    metadata: any;
    open: boolean;
    remoteId: string;
    peer: string;
    answer(stream: MediaStream, options?: AnswerOptions): void;
    close(): void | void;
    replaceStream(stream: MediaStream): void;
    on(event: string, cb: () => void): void;
    on(event: "stream", cb: (stream: MediaStream) => void): void;
    on(event: "close", cb: () => void): void;
    on(event: "removeStream", cb: (reamoteStream: MediaStream) => void): void;
  }
  declare class DataConnection {
    metadata: any;
    open: boolean;
    remoteId: string;
    peer: string;
    send(data: any): void;
    close(): void | void;
    on(event: string, cb: () => void): void;
    on(event: "data", cb: (data: any) => void): void;
    on(event: "close", cb: () => void): void;
  }
  declare interface DataObject {
    src: string;
    data: any;
  }
  declare class MeshRoom {
    close(): void;
    getLog(): void;
    replaceStream(stream: MediaSource): void;
    send(data: any): void;
    on(event: string, cb: () => void): void;
    on(event: "open", cb: () => void): void;
    on(event: "peerJoin", cb: (peerId: string) => void): void;
    on(event: "peerLeave", cb: (peerId: string) => void): void;
    on(event: "log", cb: (logs: Array<string>) => void): void;
    once(event: "log", cb: (logs: Array<string>) => void): void;
    on(event: "stream", cb: (stream: MediaStream) => void): void;
    on(event: "data", cb: (object: DataObject) => void): void;
    on(event: "close", cb: () => void): void;
    on(event: "removeStream", cb: (stream: MediaStream) => void): void;
  }
  declare class SFURoom {
    close(): void;
    getLog(): void;
    replaceStream(stream: MediaSource): void;
    send(data: any): void;
    on(event: string, cb: () => void): void;
    on(event: "open", cb: () => void): void;
    on(event: "peerJoin", cb: (peerId: string) => void): void;
    on(event: "peerLeave", cb: (peerId: string) => void): void;
    on(event: "log", cb: (logs: Array<string>) => void): void;
    once(event: "log", cb: (logs: Array<string>) => void): void;
    on(event: "stream", cb: (stream: MediaStream) => void): void;
    on(event: "data", cb: (object: DataObject) => void): void;
    on(event: "close", cb: () => void): void;
    on(event: "removeStream", cb: (stream: MediaStream) => void): void;
  }
}
