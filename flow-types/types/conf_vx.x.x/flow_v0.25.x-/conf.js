declare module "conf" {
  declare class Conf<T = any> mixins Iterable<[string, T]> {
    store: {
      [key: string]: T
    };
    path: string;
    size: number;
    constructor(options?: Conf$Conf$Options<T>): this;
    get(key: string, defaultValue?: T): T;
    set(key: string, val: T): void;
    set(object: {
      [key: string]: T
    }): void;
    has(key: string): boolean;
    delete(key: string): void;
    clear(): void;
    onDidChange(
      key: string,
      callback: (oldVal: T | void, newVal: T | void) => void
    ): void;
    undefined(): Iterator<[string, T]>;
  }
  declare interface Conf$Options<T> {
    defaults?: {
      [key: string]: T
    };
    configName?: string;
    projectName?: string;
    cwd?: string;
    encryptionKey?: string | Buffer | NodeJS.TypedArray | DataView;
    fileExtension?: string;
  }
  declare module.exports: typeof Conf;
}
