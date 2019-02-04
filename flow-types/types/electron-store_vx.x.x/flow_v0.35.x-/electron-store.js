declare module 'electron-store' {
        declare type JSONValue = string
| number
| boolean
| JSONObject
| JSONArray;
	declare interface JSONObject {
[x: string]: JSONValue
} 
	declare type JSONArray = {} & Array<JSONValue>

	declare interface ElectronStoreOptions<T> {

/**
 * Default data.
 */
defaults?: T,

/**
 * Name of the storage file (without extension).
 */
name?: string,

/**
 * Storage file location. Don't specify this unless absolutely necessary!
 */
cwd?: string,

/**
 * When specified, the store will be encrypted using the aes-256-cbc encryption algorithm.
 */
encryptionKey?: string | Buffer
} 
	declare class ElectronStore<T> mixins Iterable<[string, JSONValue]> {
constructor(options?: ElectronStoreOptions<T>): this;

/**
 * Set an item.
 */
set<K: $Keys<T>>(key: K, value: $ElementType<T, K>): void;
set(key: string, value: any): void;

/**
 * Set multiple items at once.
 */
set(object: Pick<T, $Keys<T>> | T | JSONObject): void;

/**
 * Get an item or defaultValue if the item does not exist.
 */
get<K: $Keys<T>>(key: K, defaultValue?: JSONValue): $ElementType<T, K>;
get(key: string, defaultValue?: any): any;

/**
 * Check if an item exists.
 */
has(key: $Keys<T> | string): boolean;

/**
 * Delete an item.
 */
delete(key: $Keys<T> | string): void;

/**
 * Delete all items.
 */
clear(): void;

/**
 * Watches the given key, calling callback on any changes. When a key is first set oldValue
 * will be undefined, and when a key is deleted newValue will be undefined.
 */
onDidChange<K: $Keys<T>>(
key: K,
callback: (newValue: $ElementType<T, K>, oldValue: $ElementType<T, K>) => void): void;
onDidChange(
key: string,
callback: (newValue: JSONValue, oldValue: JSONValue) => void): void;

/**
 * Get the item count.
 */
size: number;

/**
 * Get all the data as an object or replace the current data with an object.
 */
store: T;

/**
 * Get the path to the storage file.
 */
path: string;

/**
 * Open the storage file in the user's editor.
 */
openInEditor(): void;
undefined(): Iterator<[string, JSONValue]>
}
	declare module.exports: typeof ElectronStore

    }
