declare module "node-persist" {
  import typeof * as Q from "q";

  declare type milliseconds = number;

  declare var npm$namespace$NodePersist: {
    init: typeof NodePersist$init,
    initSync: typeof NodePersist$initSync,
    getItem: typeof NodePersist$getItem,
    getItemSync: typeof NodePersist$getItemSync,
    setItem: typeof NodePersist$setItem,
    setItemSync: typeof NodePersist$setItemSync,
    removeItem: typeof NodePersist$removeItem,
    removeItemSync: typeof NodePersist$removeItemSync,
    clear: typeof NodePersist$clear,
    clearSync: typeof NodePersist$clearSync,
    values: typeof NodePersist$values,
    valuesWithKeyMatch: typeof NodePersist$valuesWithKeyMatch,
    keys: typeof NodePersist$keys,
    length: typeof NodePersist$length,
    forEach: typeof NodePersist$forEach,
    persist: typeof NodePersist$persist,
    persistSync: typeof NodePersist$persistSync,
    persistKey: typeof NodePersist$persistKey,
    persistKeySync: typeof NodePersist$persistKeySync
  };
  declare export interface NodePersist$InitOptions {
    dir?: string;
    stringify?: (toSerialize: any) => string;
    parse?: (serialized: string) => any;
    encoding?: string;
    logging?: boolean | Function;
    continuous?: boolean;
    interval?: milliseconds | boolean;
    ttl?: milliseconds | boolean;
  }

  declare export function NodePersist$init(
    options?: NodePersist$InitOptions,
    callback?: Function
  ): Q.Promise<any>;

  declare export function NodePersist$initSync(
    options?: NodePersist$InitOptions
  ): void;

  declare export function NodePersist$getItem(
    key: string,
    callback?: (err: any, value: any) => any
  ): Q.Promise<any>;

  declare export function NodePersist$getItemSync(key: string): any;

  declare export function NodePersist$setItem(
    key: string,
    value: any,
    callback?: (err: any) => any
  ): Q.Promise<any>;

  declare export function NodePersist$setItemSync(
    key: string,
    value: any
  ): void;

  declare export function NodePersist$removeItem(
    key: string,
    callback?: (err: any) => any
  ): Q.Promise<any>;

  declare export function NodePersist$removeItemSync(key: string): void;

  declare export function NodePersist$clear(
    callback?: (err: any) => any
  ): Q.Promise<any>;

  declare export function NodePersist$clearSync(): void;

  declare export function NodePersist$values(): Array<any>;

  declare export function NodePersist$valuesWithKeyMatch(
    match: string
  ): Array<any>;

  declare export function NodePersist$keys(): Array<string>;

  declare export function NodePersist$length(): number;

  declare export function NodePersist$forEach(
    callback: (key: string, value: any) => void
  ): void;

  declare export function NodePersist$persist(
    callback?: (err: any) => any
  ): Q.Promise<any>;

  declare export function NodePersist$persistSync(): void;

  declare export function NodePersist$persistKey(
    key: string,
    callback?: (err: any) => any
  ): Q.Promise<any>;

  declare export function NodePersist$persistKeySync(key: string): void;

  declare export default typeof NodePersist;
}
