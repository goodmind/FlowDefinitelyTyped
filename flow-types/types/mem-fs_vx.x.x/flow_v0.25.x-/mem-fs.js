declare module "mem-fs" {
  import type { EventEmitter } from "events";

  import type { Transform } from "stream";

  import typeof * as File from "vinyl";

  declare export type Store = {
    get: (filepath: string) => File,
    add: (file: File) => this,
    each: (callback: (file: File, index: number) => void) => this,
    stream: () => Transform
  } & EventEmitter;

  declare export function create(): Store;
}
