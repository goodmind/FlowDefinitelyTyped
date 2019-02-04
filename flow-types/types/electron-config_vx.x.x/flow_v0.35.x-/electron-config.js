declare module 'electron-config' {
        declare interface ElectronConfigOptions {

/**
 * Default config.
 */
defaults?: {},

/**
 * Name of the config file (without extension).
 */
name?: string
} 
	declare class ElectronConfig mixins Iterable<[string, string
| number
| boolean
| Symbol
| {}]> {

/**
 * gets the item count
 */
size: number;

/**
 * Get all the config as an object or replace the current config with an object
 */
store: {};

/**
 * Get the path to the config file.
 */
path: string;
constructor(options?: ElectronConfigOptions): this;

/**
 * Sets an item
 */
set(key: string, value: any): void;

/**
 * Sets multiple items at once
 */
set(object: {}): void;

/**
 * deletes an item
 */
delete(key: string): void;

/**
 * retrieves an item
 */
get(key: string): any;

/**
 * Checks if an item exists
 */
has(key: string): boolean;

/**
 * deletes all items
 */
clear(): void;
undefined(): Iterator<[string, string
| number
| boolean
| Symbol
| {}]>
}
	
	declare module.exports: typeof ElectronConfig

    }
