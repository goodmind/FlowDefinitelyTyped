declare module "redux-storage-engine-localstorage" {
  import type { StorageEngine } from "redux-storage";

  declare export type Replacer = (key: string, value: any) => any;
  declare export type Reviver = Replacer;
  declare export default function createEngine(
    key: string,
    replacer?: Replacer,
    reviver?: Reviver
  ): StorageEngine;
}
