declare module "mosca" {
  declare export class Server {
    id: string;
    opts: any;
    modernOpts: any;
    clients: any;
    closed: boolean;
    constructor(opts: any, callback?: () => void): this;
    on(
      when: string,
      callback:
        | (() => void)
        | ((client: Client) => void)
        | ((packet: Packet, client: Client) => void)
    ): void;
    once(when: string, callback: () => void): void;
    toString(): string;
    subscribe(topic: string, callback: () => void, done: () => void): void;
    publish(
      message: Message,
      callback: (obj: any, packet: Packet) => void
    ): void;
    authenticate(
      client: Client,
      username: string,
      password: string,
      callback: (obj: any, authenticated: boolean) => void
    ): void;
    published(
      packet: Packet,
      client: Client,
      callback: (obj: any) => void
    ): void;
    authorizePublish(
      client: Client,
      topic: string,
      payload: string,
      callback: (obj: any, authorized: boolean) => void
    ): void;
    authorizeSubscribe(
      client: Client,
      topic: string,
      callback: (obj: any, authorized: boolean) => void
    ): void;
    authorizeForward(
      client: Client,
      packet: Packet,
      callback: (obj: any, authorized: boolean) => void
    ): void;
    storePacket(packet: Packet, callback: () => void): void;
    deleteOfflinePacket(
      client: Client,
      messageId: number,
      callback: () => void
    ): void;
    forwardRetained(
      pattern: string,
      client: Client,
      callback: () => void
    ): void;
    restoreClientSubscriptions(client: Client, callback: () => void): void;
    forwardOfflinePackets(client: Client, callback: () => void): void;
    updateOfflinePacket(
      client: Client,
      originMessageId: number,
      packet: Packet,
      callback: (obj: any, packet: Packet) => void
    ): void;
    persistClient(client: Client, callback: () => void): void;
    close(callback?: () => void): void;
    attachHttpServer(server: any, path?: any): void;
  }
  declare export class Client {
    id: string;
    connection: any;
    server: Server;
    logger: any;
    subscriptions: any;
    nextId: number;
    inflight: any;
    inflightCounter: number;
    constructor(connection: any, server: Server): this;
    close(callback?: () => void, reason?: string): void;
  }
  declare export class Stats {
    maxConnectedClients: number;
    connectedClients: number;
    lastIntervalConnectedClients: number;
    publishedMessages: number;
    lastIntervalPublishedMessages: number;
    started: Date;
    load: any;
    wire(server: Server): void;
  }
  declare export class Authorizer {
    users: any;
    addUser(
      username: string,
      password: string,
      authorizePublish: string,
      authorizeSubscribe: string,
      callback: (func: any) => void
    ): void;
  }
  declare export interface Packet {
    topic: string;
    payload: any;
    messageId: string;
    qos: number;
    retain: boolean;
  }
  declare export interface Message {
    topic: string;
    payload: any;
    qos: number;
    retain: boolean;
  }

  declare var npm$namespace$persistence: {
    Redis: typeof persistence$Redis,
    Mongo: typeof persistence$Mongo,
    LevelUp: typeof persistence$LevelUp,
    Memory: typeof persistence$Memory
  };
  declare interface persistence$Persistence {
    wire(server: Server): void;
  }

  declare type persistence$FactoryFunc = (options: {
    [key: string]: any
  }) => persistence$Persistence;

  declare var persistence$Redis: persistence$FactoryFunc;

  declare var persistence$Mongo: persistence$FactoryFunc;

  declare var persistence$LevelUp: persistence$FactoryFunc;

  declare var persistence$Memory: persistence$FactoryFunc;
}
