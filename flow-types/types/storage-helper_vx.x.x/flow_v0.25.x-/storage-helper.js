declare module "storage-helper" {
  declare export function clear(): void;

  declare export function showStorageLogger(enabled: boolean): void;

  declare export function setItem(
    key: string,
    value: string,
    permanent?: boolean
  ): void;

  declare export function getItem<T: boolean | void, U>(
    key: string,
    parse?: T,
    fallback?: U
  ): "There was Conditional Type, use $Call utility type";

  declare export function removeItem(key: string): void;

  declare var storageHelper: {
    setItem: typeof setItem,
    getItem: typeof getItem,
    removeItem: typeof removeItem,
    clear: typeof clear
  };
  declare export default typeof storageHelper;
}
