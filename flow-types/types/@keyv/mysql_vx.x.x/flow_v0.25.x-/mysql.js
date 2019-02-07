declare module "@keyv/mysql" {
  import type { Store } from "keyv";

  import type { EventEmitter } from "events";

  declare module.exports: typeof KeyvMysql;

  declare class KeyvMysql mixins EventEmitter, Store<string | void> {
    ttlSupport: false;
    namespace: string;
    constructor(uri?: string): this;
    constructor(options?: KeyvMysql$KeyvMysql$Options): this;
    get(key: string): Promise<string | void>;
    set(key: string, value: string | void): Promise<any>;
    delete(key: string): Promise<boolean>;
    clear(): Promise<void>;
  }
  declare interface KeyvMysql$Options {
    uri?: string;
    table?: string;
    keySize?: number;
  }
}
