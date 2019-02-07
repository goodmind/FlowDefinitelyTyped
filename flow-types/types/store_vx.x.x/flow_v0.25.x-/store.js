declare interface StoreJsAPI {
  +version: string;
  +enabled: boolean;
  get(key: string, optionalDefaultValue?: any): any;
  set(key: string, value: any): any;
  remove(key: string): void;
  each(callback: (val: any, namespacedKey: string) => void): void;
  clearAll(): void;
  hasNamespace(namespace: string): boolean;
  createStore(plugins?: Function[], namespace?: string): StoreJsAPI;
  addPlugin(plugin: Function): void;
  namespace(namespace: string): StoreJsAPI;
}
declare interface StoreJsEngine {
  createStore(storages: any[], plugins?: any[], namespace?: string): StoreJsAPI;
}
declare interface StoreJsStorage {
  name: string;
  read: (key: string) => string | null;
  write: (key: string, data: string) => void;
  each: (callback: (val: string, key: string) => any) => void;
  remove: (key: string) => void;
  clearAll: () => void;
}
declare var store: StoreJsAPI;
declare module "store" {
  declare module.exports: typeof store;
}
declare module "store/dist/store.legacy" {
  declare module.exports: typeof store;
}
declare module "store/dist/store.legacy.min" {
  declare module.exports: typeof store;
}
declare module "store/dist/store.modern" {
  declare module.exports: typeof store;
}
declare module "store/dist/store.modern.min" {
  declare module.exports: typeof store;
}
declare var engine: StoreJsEngine;
declare module "store/src/store-engine" {
  declare module.exports: typeof engine;
}
declare module "store/plugins/all" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/default" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/dump" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/events" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/expire" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/observe" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/operations" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/update" {
  declare module.exports: typeof Function;
}
declare module "store/plugins/v1-backcompat" {
  declare module.exports: typeof Function;
}
declare var storage: StoreJsStorage;
declare module "store/storages/cookieStorage" {
  declare module.exports: typeof storage;
}
declare module "store/storages/localStorage" {
  declare module.exports: typeof storage;
}
declare module "store/storages/memoryStorage" {
  declare module.exports: typeof storage;
}
declare module "store/storages/oldFF-globalStorage" {
  declare module.exports: typeof storage;
}
declare module "store/storages/oldIE-userDataStorage" {
  declare module.exports: typeof storage;
}
declare module "store/storages/sessionStorage" {
  declare module.exports: typeof storage;
}
