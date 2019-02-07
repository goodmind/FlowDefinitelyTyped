declare module "redux-localstorage-filter" {
  import type { StorageAdapter } from "redux-localstorage";

  declare export function getSubset(obj: any, paths: string[]): any;

  declare export default function filter(
    paths?: string | string[]
  ): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>;
}
