declare module "flat-cache" {
  declare export interface Cache {
    load(cacheId: string, cacheDir?: string): void;
    loadFile(pathToFile: string): void;
    all(): {
      [key: string]: any
    };
    keys(): string[];
    setKey(key: string, value: any): void;
    removeKey(key: string): void;
    getKey(key: string): any;
    save(noPrune?: boolean): void;
    removeCacheFile(): boolean;
    destroy(): void;
  }
  declare export function load(cacheId: string, cacheDir?: string): Cache;

  declare export function create(cacheId: string, cacheDir?: string): Cache;

  declare export function createFromFile(filePath: string): Cache;

  declare export function clearCacheById(
    cacheId: string,
    cacheDir?: string
  ): boolean;

  declare export function clearAll(cacheDir?: string): boolean;
}
