declare module 'angular' {
        declare type a0$storage$IStoreService = {

/**
 * Returns a namespaced store
 * @param {String} namespace - The namespace
 * @param {String} storage - The name of the storage service. Defaults to local storage.
 * @param {String} delimiter - The delimiter to use to separate the namespace and the keys.
 * @returns {a0$storage$INamespacedStoreService}
 */
getNamespacedStore(
namespace: string,
storage?: string,
delimiter?: string): a0$storage$INamespacedStoreService
} & a0$storage$INamespacedStoreService


declare interface a0$storage$INamespacedStoreService {

/**
 * Sets a new value to the storage with the key name. It can be any object.
 * @param {String} name - The key name for the location of the value
 * @param value - The value to store
 */
set(name: string, value: any): void,

/**
 * Returns the saved value with they key name.
 * @param {String} name - The key name for the location of the value
 * @returns The saved value; if you saved an object, you get an object
 */
get(name: string): any,

/**
 * Deletes the saved value with the key name
 * @param {String} name - The key name for the location of the value to remove
 */
remove(name: string): void
} 

declare interface a0$storage$IStoreProvider {

/**
 * Sets the storage.
 * @param {String} storage - The storage name
 */
setStore(storage: string): void
} 
    }
declare module 'angular-storage' {
        declare var _: string;
	declare export default typeof _

	import typeof * as angular from 'angular';

    }
