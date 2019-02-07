declare module "fleximap" {
  declare export type KeyChain = any;
  declare export class FlexiMap {
    constructor(object?: any[] | { [key: string]: any }): this;
    get(keyChain: KeyChain): any;
    getRange(keyChain: KeyChain, fromIndex: number, toIndex: number): any;
    getRaw(keyChain: KeyChain): any;
    getAll(): any[] | { [key: string]: any };
    count(keyChain: KeyChain): number;
    hasImmediateKey(key: string): boolean;
    hasKey(keyChain: KeyChain): boolean;
    hasType(keyChain: KeyChain, type: any): boolean;
    hasValue(keyChain: KeyChain, value: any): boolean;
    hasObject(keyChain: KeyChain, object: { [key: string]: any }): boolean;
    set(keyChain: KeyChain, value: any): any;
    add(keyChain: KeyChain, value: any): number;
    concat(keyChain: KeyChain, value: any): any;
    remove(keyChain: KeyChain): any;
    removeRange(keyChain: KeyChain, fromIndex: number, toIndex: number): any[];
    removeAll(): void;
    splice(
      keyChain: KeyChain,
      index: number,
      count: number,
      ...items: any[]
    ): any[];
    pop(keyChain: KeyChain): any[];
  }
}
