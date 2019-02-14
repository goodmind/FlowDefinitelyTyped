declare module "backbone" {
  declare interface Serializer {
    serialize(item: any): any;
    deserialize(data: any): any;
  }
  declare class LocalStorage {
    name: string;
    serializer: Serializer;
    records: string[];
    constructor(name: string, serializer?: Serializer): this;
    save(): void;
    create(model: any): any;
    update(model: any): any;
    find(model: any): any;
    findAll(): any;
    destroy<T>(model: T): T;
    localStorage(): any;
    _clear(): void;
    _storageSize(): number;
    _itemName(id: any): string;
  }
}
declare module "global" {
  declare var Store: typeof Backbone.LocalStorage;
  declare type Store = Backbone.LocalStorage;
}
declare module "backbone.localstorage" {
  import typeof * as Backbone from "backbone";
}
