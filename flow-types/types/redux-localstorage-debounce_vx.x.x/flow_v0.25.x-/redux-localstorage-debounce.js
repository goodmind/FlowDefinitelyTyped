declare module "redux-localstorage-debounce" {
  import type { StorageAdapter } from "redux-localstorage";

  declare export interface DebounceOptions {
    maxWait?: number;
    [key: string]: any;
  }
  declare export default function debounce(
    wait: number,
    options?: number | DebounceOptions
  ): <A>(adapter: StorageAdapter<A>) => StorageAdapter<A>;
}
