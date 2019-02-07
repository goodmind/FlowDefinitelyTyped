declare module "@keyv/mongo" {
  import type { Store } from "keyv";

  import type { EventEmitter } from "events";

  declare module.exports: typeof KeyvMongo;

  declare class KeyvMongo<TValue> mixins EventEmitter, Store<TValue> {
    ttlSupport: false;
    namespace: string;
    constructor(uri?: string): this;
    constructor(options?: KeyvMongo$KeyvMongo$Options): this;
    get(key: string): Promise<TValue | void>;
    set(key: string, value: TValue, ttl?: number): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
  }
  declare interface KeyvMongo$Options {
    uri?: string;
    url?: string;
    collection?: string;
  }
}
